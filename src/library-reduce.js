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
    /*
      var newObject = Object.keys(myObject).reduce(function(previous, current) {
        previous[current] = myObject[current] * myObject[current];
        return previous;
      }, {});
    */

    parse3: function(children) {
      let c = children;
      log("typeof children", typeof children);
      log("c is Array?", Array.isArray(c));
      let cKeys = Object.keys(c);
      if (cKeys.length > 0) {
        log(`call children`);
        let dirs = Object.keys(c).reduce((newDirs, node) => {
          log(`node: ${JSON.stringify(node, null, 2)}`);
          newDirs[node] = node;
          return newDirs;
        });
        log(`remaining dirs: \n ${chalk.green(JSON.stringify(dirs, null, 2))}`);
        this.parse3(dirs);
      } else {
        log(`There are no mo' children`);
      }
    },
    parse2: function(c = config) {
      // Start Expect [ { }, { }, ... ]
      // Recurse through until [ ]
      if (c.hasOwnProperty("library")) {
        log(`Library name: ${c.library}`);
        log(`typeof c.children: ${chalk.blue(typeof c.children)}`);
        this.parse3(c.children); //kickoff recursion
      } else {
        log(`no library`);
      }
    }
  };
};

module.exports = {
  Library
};
