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
    parse2: function(configuration = config) {
      // Start Expect [ { }, { }, ... ]
      // Recurse through until [ ]
      log(configuration);
    }
  };
};

module.exports = {
  Library
};
