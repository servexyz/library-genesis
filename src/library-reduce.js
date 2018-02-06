const log = console.log;
const chalk = require("chalk");

var Library = config => {
  return {
    //TODO: Create getType which returns "directory" or "file"
    printConfig: () => {
      let keys = Object.keys(config);
      let values = Object.values(config);
      let entries = Object.entries(config);
      log(`${chalk.bold("Keys")}: \n ${chalk.yellow(keys)} \n `);
      log(
        `${chalk.bold("Values")}: \n ${chalk.blue(
          JSON.stringify(values, null, 2)
        )} \n `
      );
      log(`${chalk.bold("Entries")}: \n ${chalk.green(entries)} \n `);
    },
    parse: function(c = config) {
      let propDir = c.hasOwnProperty("directory"); // => bool
      let propChild = c.hasOwnProperty("children");
      log(`Children: ${JSON.stringify(c.children)}`);
      if (propDir || propChild) {
        log(`configuration has directory property: ${propDir}`);
        log(`configuration has children property: ${propChild}`);
      }
      for (let [k, v] of Object.entries(c)) {
        log(`k:${k} v:${v}`);
      }
    }
  };
};
/*
      var newObject = Object.keys(myObject).reduce(function(previous, current) {
        previous[current] = myObject[current] * myObject[current];
        return previous;
      }, {});
    */
module.exports = {
  Library
};
