var srcDir = "./src";
var destDir = "./build";

module.exports = {
  browserSync: {
    server: {
      baseDir: [destDir, srcDir] // including srcDir for sourcemap
    },
    files: [
      destDir + "/**"
    ]
  },
  browserify: {
    debug: true,
    extensions: [".coffee", ".js"],
    bundleConfigs: [{
      entries: srcDir + "/js/app.js",
      dest: destDir,
      outputName: "dist.js"
    }]
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
