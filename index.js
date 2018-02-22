module.exports = {
  process(src) {
    return (
      "module.exports = require('pug').compile(" + JSON.stringify(src) + ");"
    );
  }
};
