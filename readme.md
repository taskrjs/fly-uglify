<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

# fly-uglify [![][travis-badge]][travis-link]

> [Uglify JS](https://github.com/mishoo/UglifyJS2) plugin for Fly.

## Install

```
npm install --save-dev fly-uglify
```

## API

### .uglify(options)

> Check out the [UglifyJS documentation](https://github.com/mishoo/UglifyJS2#usage) to see the available options.

## Usage

```js
exports.build = function * () {
  yield this.source('src/**/*.uglify')
    .uglify({
      compress: {
        drop_console: true,
        join_vars: true
      }
    })
    .target('dist');
}
```

## License

MIT © [FlyJS](https://github.com/flyjs/fly)

[travis-link]:  https://travis-ci.org/bucaran/fly-uglify
[travis-badge]: http://img.shields.io/travis/bucaran/fly-uglify.svg?style=flat-square
