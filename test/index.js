const test = require("tape").test
const uglify = require("../")

test("fly-uglify", (t) => {
  t.plan(3)
  uglify.call({
    filter: function (name, transform, options) {
      t.equal(name, "uglify", "add uglify filter")
      t.ok(/^\s*$/.test(transform("/* yay */")), "uglify transform")
      t.equal(options.ext, ".js", "extension is .js")
    }
  })
})
