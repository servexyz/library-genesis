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
    printEverything: () => {
      let keys = Object.keys(config);
      let values = Object.values(config);
      let entries = Object.entries(config);
      log(`keys: ${chalk.blue(keys)} \n `);
      log(`values: ${chalk.blue(JSON.stringify(values, null, 2))} \n `);
      log(`entries: ${chalk.blue(entries)} \n `);
    }
  };
};

module.exports = {
  Library
};
