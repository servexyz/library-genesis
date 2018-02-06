const log = console.log;
const chalk = require("chalk");

var Library = config => {
  return {
    //TODO: Create getType which returns "directory" or "file"
    printConfig: () => {
      let keys = Object.keys(config);
      let values = Object.values(config);
      let entries = Object.entries(config);
      log(`Config type: ${chalk.magenta(typeof config)}`);
      log(`Config is Array? ${chalk.magenta(Array.isArray(config))}`);
      log(`Raw Config \n${chalk.yellow(JSON.stringify(config, null, 2))}`);
      log(`${chalk.bold("Keys")}: \n ${chalk.yellow(keys)} \n `);
      log(
        `${chalk.bold("Values")}: \n ${chalk.blue(
          JSON.stringify(values, null, 2)
        )} \n `
      );
      log(`${chalk.bold("Entries")}: \n ${chalk.green(entries)} \n `);
    },
    parse: () => {
      log(`config: ${JSON.stringify(config, null, 2)}`);
      let root = config.directory;
      log(`root: ${root}`);
      config.files.map(f => {
        log(`${chalk.yellow(f.type)}`);
        log(`${chalk.blue(f.dest)}`);
        log(`${chalk.green(f.content)}`);
      });
    }
  };
};
module.exports = {
  Library
};
