const log = console.log;
const chalk = require("chalk");
const { File } = require("file-genesis");

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
    parse: function() {
      log(`config: ${JSON.stringify(config, null, 2)}`);
      let root = config.directory;
      log(`root: ${root}`);
      config.files.map(f => {
        switch (f.type) {
          case "file":
            return this.genFile(f);
          case "symlink":
            return this.genSymlink(f);
          case "template":
            return this.genTemplate(f);
        }
      });
    },
    genFile: function(file) {
      let f = file;
      // log(`${chalk.yellow(f.type)}`);
      // log(`${chalk.blue(f.dest)}`);
      // log(`${chalk.green(f.content)}`);
      File(f.dest).plain(f.content);
    },
    genSymlink: function(file) {
      let f = file;
      // log(`${chalk.yellow(f.type)}`);
      // log(`${chalk.blue(f.dest)}`);
      // log(`${chalk.green(f.content)}`);
      File(f.dest).symlink(content.original);
    },
    genTemplate: function(file) {
      let f = file;
      // log(`${chalk.yellow(f.type)}`);
      // log(`${chalk.blue(f.dest)}`);
      // log(`${chalk.green(f.content)}`);
      File(f.dest).template(content.original, content.variables);
    }
  };
};
module.exports = {
  Library
};
