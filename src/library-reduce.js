const log = console.log;
const chalk = require("chalk");

/*
===============================================
Brainstorm
===============================================
1. Create placeholder directories object
2. Grab all object keys in current object
3. Filter for files (ie. contains *.*)
4. Generate files
5. Reduce files from original object 
6. Return new object of directories
7. Recurse with object of directories
===============================================
*/

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
    }
  };
};

module.exports = {
  Library
};
