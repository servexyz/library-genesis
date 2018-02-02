const log = console.log;
const chalk = require("chalk");

let Library = config => {
  config.reduce();
};
const iterate = (all, current) => {
  log(`All: ${all}`);
  log(`Current: ${current}`);
  return (all += current);
};

module.exports = {
  Library
};
