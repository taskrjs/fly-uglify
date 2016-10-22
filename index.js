'use strict';

const extn = require('path').extname;
const minify = require('uglify-js').minify;

module.exports = function () {
	this.plugin('uglify', {}, function * (file, opts) {
		opts = Object.assign({}, opts, {fromString: 1});

		const ext = extn(file.base);
		const rgx = new RegExp(ext, 'i');
		// replace extension with `.js`
		file.base = file.base.replace(rgx, '.js');

		const out = minify(file.data.toString(), opts);

		// write output
		file.data = new Buffer(out.code);
	});
};
