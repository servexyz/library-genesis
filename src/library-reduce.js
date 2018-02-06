const log = console.log;
const chalk = require("chalk");

var Library = config => {
  let hardstop = 1;
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
    has: function(obj, prop) {
      return obj.hasOwnProperty(prop);
    },
    parse: function(c = config) {
      if (hardstop < 10) {
        log("hardstop ", hardstop);
        log(`inside parse`);
        hardstop++;
        // let propDir = c.hasOwnProperty("directory"); // => bool
        let propDir = this.has(c, "directory");
        // let propChild = c.hasOwnProperty("children");
        let propChild = this.has(c, "children");
        // log(`Children: ${JSON.stringify(c.children)}`);
        if (propDir) {
          log(`propDir good`);
          if (propChild) {
            log(`propChild good`);
            c.children
              .map(n => {
                if (this.has(n, "directory")) {
                  //TODO: ensureDir()
                  log(`directory: ${n.directory}`);
                }
                return n.children;
              })
              .map(child => {
                log(`child: ${JSON.stringify(child, null, 2)}`);
                return this.parse(child);
              });
          }
        }
      }
    }
  };
};
/*
      var newObject = Object.keys(c.children).reduce(function(
        previous,
        current
      ) {
        previous[current] = c.children[current];
        return previous;
      },
      {});
    */
module.exports = {
  Library
};
