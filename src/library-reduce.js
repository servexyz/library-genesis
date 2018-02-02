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
    parse: () => {
      let localConfig = Object.assign({}, config);
      log(localConfig);
      let directories = {};
      //reduce, ( generate(//log) && splice ) || object assign, splice, recurse
      for (let [key, val] of Object.entries(localConfig)) {
        key.indexOf(".") > -1
          ? log(`File: ${key}`)
          : Object.assign(directories, key, val);
        //need to do double assign here... first key: val, then direct
      }
      //i think there's a cleaner way to do this
      //need to log and use splice to take off files
      // localConfig
      //   .map((o, i) => o)
      //   .filter(o => {
      //     let k = Object.keys(o)[0];
      //     log(`k: ${k} type: ${typeof k}`);
      //     return k.indexOf(".") > -1;
      //   })
      //   .forEach(k => log(`file: ${JSON.stringify(k)}`));
    }
  };
};

module.exports = {
  Library
};
