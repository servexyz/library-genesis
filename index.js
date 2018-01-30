// const Library = require("./src/library");

const log = console.log;
let iterate = config => {
  for (const [key, value] of Object.entries(config)) {
    log(`key: ${key}`);
    log(`value: ${value}`);
  }
};

module.exports = { iterate };
