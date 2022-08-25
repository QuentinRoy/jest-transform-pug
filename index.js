module.exports = {
  process(src) {
    return {
      code: "module.exports = require('pug').compile(" + JSON.stringify(src) + ");",
    };
  }
};
