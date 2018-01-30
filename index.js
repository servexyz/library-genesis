// const Library = require("./src/library");
const log = console.log;
let iterate = config => {
  log(JSON.stringify(config, " ", 2));
  for (const [key, value] of Object.entries(config)) {
    log(`key: ${key}`);
    log(`value: ${value}`);
  }
};

module.exports = { iterate };
