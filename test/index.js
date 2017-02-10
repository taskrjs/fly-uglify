'use strict';

const join = require('path').join;
const test = require('tape');
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const tmp = join(__dirname, 'tmp');

test('fly-uglify', t => {
	t.plan(4);

	const fly = new Fly({
		plugins: [
			require('../'),
			require('fly-clear')
		],
		tasks: {
			* foo(f) {
				const src = `${dir}/**/*.js`;
				t.ok('uglify' in fly.plugins, 'attach `uglify()` plugin to fly');

				yield f.source(src).uglify().target(tmp);
				const str1 = yield f.$.read(`${tmp}/a.js`, 'utf8');
				t.equal(str1, `console.log("this is a");`, 'apply `uglify-js` to content');
				const arr1 = yield f.$.expand(`${tmp}/**/*.js`);
				t.equal(arr1.length, 2, 'keep all files');

				/* eslint camelcase:0 */
				yield f.source(src).uglify({compress: {drop_console: 1}}).target(tmp);
				const str2 = yield f.$.read(`${tmp}/a.js`, 'utf8');
				t.equal(str2, '', 'accept custom config (`compress` options)');

				yield f.clear(tmp);
			}
		}
	});

	fly.start('foo');
});
