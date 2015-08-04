const assign = require("object-assign")
const minify = require("uglify-js").minify

module.exports = function () {
  this.filter("uglify", (source, options) => {
    try { return minify(source, assign({ fromString: true }, options)).code }
    catch (e) { throw e }
  }, { ext: ".js" })
}
