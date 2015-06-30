module.exports = function () {
  this.uglify = function (opts) {
    opts = opts || {}
    opts.fromString = true
    return this
      .filter((src) => require("uglify-js")
        .minify(src, opts).code)
      .notify("plugin_run", { plugin: "uglify" })
  }
}
