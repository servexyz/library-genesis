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
      log(configuration);
      let rootDirectory = configuration.directory;
      let rootDirectoryName = configuration.directory.target;
      log(`rootDirectory: ${JSON.stringify(rootDirectory)}`);
      let libraryDestination = configuration.directory.target;
      log(`lib dest: ${libraryDestination}`);
      Object.entries(configuration).map(node => {
        log(`node: ${node}`);
        if (node == "file") {
          log(`file ${node}`);
        } else {
          log(`dir ${node}`);
          return node;
        }
      });
    },
    parse2: function(configuration = config) {
      log(config);
      let nextConfig = [];
      log(JSON.stringify(configuration.directory, null, 2));
    }
  };
};

module.exports = {
  Library
};
