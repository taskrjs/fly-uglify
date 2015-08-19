const test = require("tape").test
const uglify = require("../")

test("fly-uglify", (t) => {
  t.plan(3)
  uglify.call({
    filter: function (name, transform) {
      const res = transform("/* yay */")
      t.equal(name, "uglify", "add uglify filter")
      t.ok(/^\s*$/.test(res.code), "uglify transform")
      t.equal(res.ext, ".js", "extension is .js")
    }
  })
})
