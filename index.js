'use strict';

const {extname} = require('path');
const {minify} = require('uglify-js');

module.exports = function (fly) {
	fly.plugin('uglify', {}, function * (file, opts) {
		opts = Object.assign({}, opts, {fromString: 1});

		const ext = extname(file.base);
		const rgx = new RegExp(ext, 'i');
		// replace extension with `.js`
		file.base = file.base.replace(rgx, '.js');

		const out = minify(file.data.toString(), opts);

		// write output
		file.data = new Buffer(out.code);
	});
};
