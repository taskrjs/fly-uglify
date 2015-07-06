const assign = require("object-assign")
const minify = require("uglify-js").minify

module.exports = function () {
  this.filter("uglify", (src, opts) => {
    try { return minify(src, assign({ fromString: true }, opts)).code }
    catch (e) { throw e }
  })
}
