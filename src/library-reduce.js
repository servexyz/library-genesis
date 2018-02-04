const log = console.log;
const chalk = require("chalk");

var Library = config => {
  return {
    isFile: function(keyString) {
      return keyString.indexOf(".") == -1 ? true : false;
      //this should be other way around, but it's working right now... something must be wrong with my code. #techDebt
    },
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
    parse: function(configuration = config) {
      log(config);
      //Grab keys. Identify root directory
      //
    }
  };
};

module.exports = {
  Library
};
