'use strict';

const join = require('path').join;
const test = require('tape').test;
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const tmp = join(__dirname, 'tmp');

test('fly-uglify', t => {
	t.plan(4);

	const fly = new Fly({
		plugins: [{
			func: require('../')
		}],
		tasks: {
			a: function * () {
				const src = `${dir}/**/*.js`;
				t.ok('uglify' in fly, 'attach `uglify()` plugin to fly');

				yield this.source(src).uglify().target(tmp);
				const str1 = yield this.$.read(`${tmp}/a.js`, 'utf8');
				t.equal(str1, `console.log("this is a");`, 'apply `uglify-js` to content');
				const arr1 = yield this.$.expand(`${tmp}/**/*.js`);
				t.equal(arr1.length, 2, 'keep all files');

				/* eslint camelcase:0 */
				yield this.source(src).uglify({compress: {drop_console: 1}}).target(tmp);
				const str2 = yield this.$.read(`${tmp}/a.js`, 'utf8');
				t.equal(str2, '', 'accept custom config (`compress` options)');

				yield this.clear(tmp);
			}
		}
	});

	fly.start('a');
});
