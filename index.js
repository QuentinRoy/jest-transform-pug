module.exports = {
  process(src, filename) {
    return {
      code: "module.exports = require('pug').compile(" + JSON.stringify(src) + ", { filename: " + JSON.stringify(filename) + " });",
    };
  }
};
