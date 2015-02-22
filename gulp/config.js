var path = require("path");
var srcDir = "./src";
var destDir = path.resolve("./build");

module.exports = config = {
  browserSync: {
    server: {
      baseDir: [destDir, srcDir] // including srcDir for sourcemap
    },
    files: [
      destDir + "/**"
    ]
  },
  browserify: {
    transforms: {
      babelify: {
        // http://babeljs.io/docs/usage/options/
        experimental: false
      }
    },
    bundleConfigs: {
      extensions: [".coffee", ".js"],
      entries: [srcDir + "/js/app.js"],
      destDir: destDir,
      outputName: "dist.js"
    }
  },
  stylus: {
    src: srcDir + "/styl/**/!(_)*",
    dest: destDir,
    autoprefixer: {
      browsers: ['last 2 versions']
    },
  },
  jade: {
    src: srcDir + "/jade/**/*.jade",
    dest: destDir
  }
};
