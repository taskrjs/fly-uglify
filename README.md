<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

[![][fly-badge]][fly] ![][mit-badge]

> [Fly][fly] plugin for [Uglify](https://github.com/mishoo/UglifyJS2)

## Usage
To learn about what options are available, check out the Uglify [CLI options](https://github.com/mishoo/UglifyJS2#usage).

### Install

```a
npm install -D fly-uglify
```

### Example

```js
exports.build = function* () {
  yield this
    .source("src/*.js")
    .uglify()
    .target("dist")
}
```

# License

[MIT](http://opensource.org/licenses/MIT) © [Jorge Bucaran][author] [et all](https://github.com/bucaran/fly-uglify/graphs/contributors)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/bucaran/fly/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


[author]: http://about.bucaran.me

[fly]: https://www.github.com/bucaran/fly

[fly-badge]: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square

[npm-pkg-link]: https://www.npmjs.org/package/fly-uglify
