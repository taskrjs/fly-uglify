const assign = require("object-assign")
const minify = require("uglify-js").minify

module.exports = function () {
  this.filter("uglify", (data, options) => {
    return assign({ ext: ".js" }, minify(data.toString(), assign({
      fromString: true
    }, options)))
  })
}
