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
    },
    parse2: function(directories = config) {
      log(`called parse2`);
      let foo = {};
      let dirs = directories;
      dirs.forEach(node => {
        log(`node: ${JSON.stringify(node)}`);
        let n = Object.keys(node)[0];
        let nType = n.indexOf(".") > -1;
        //true = file, false = directory
        if (nType === true) {
          log(`file: ${n}`);
          delete dirs.n;
          log(`${chalk.blue(JSON.stringify(node, null, 2))}`);
        } else {
          log(`dir: ${n}`);
          log(`node: ${chalk.yellow(JSON.stringify(node))}`);
          Object.assign(foo, node);
        }
      });
      log(`dirs len: ${Object.keys(dirs).length}`);
      for (const [key, val] of Object.entries(foo)) {
        log(`foo key: ${key} \n foo val: ${val}`);
      }
      log("\n");
      log(JSON.stringify(foo, null, 2));
      if (Object.keys(foo.length > 0)) {
        log(`config: ${JSON.stringify(config, null, 2)}`);
        log(`------------------`);
        log(`dirs: ${JSON.stringify(foo, null, 2)}`);
        this.parse2(foo);
      }
      // dirs.map(d => log(d));
      // log(`dirs: ${JSON.stringify(dirs)}`);
      // if (Object.keys(dirs).length > 0) {
      //   log();
      //   this.parse2(dirs);
      // }
    },
    parse3: function(directories) {
      let dirs = directories || {};
      log(config);
      config.reduce((dirs, node, i) => {
        log(`key: ${Object.keys(node)}`);
        log(`i: ${i}`);
        log(`node: ${chalk.green(JSON.stringify(node, null, 2))}`);
        //TODO: Add check to ensure Object.keys(node).length is always 1
        let nKey = Object.keys(node).toString(); // returning an array, therefore wrong index of
        log(`nKey: ${chalk.yellow(nKey)}`);
        if (this.isFile(nKey)) {
          log(`${chalk.blue(nKey)} is dir ${JSON.stringify(node)}`);
          return dirs + node;
        } else {
          log(`${chalk.blue(nKey)} is file`);
          return dirs;
        }
        // log(`node is file: ${this.isFile(Object.keys(node))}`);
        // log(`key len: ${Object.keys(node).length}`);
        // log(`dirs: ${JSON.stringify(dirs)}`);
        // log(`node: ${JSON.stringify(node)}`);
      });
    },
    parse4: function(configuration = config) {
      //Configuration will either be remnant directories...
      //Or it will be the entire config on the first time
      log(`${chalk.blue(JSON.stringify(configuration))}`);
      configuration.map(c => ({ ...c }));
      let directories = configuration.map(c => Object.keys(c)).map((k, i) => {
        log(`k[${k}] \n @index[${i}]`);
        configuration.splice(i, 1);
      });
      log(`configuration ${chalk.magenta(JSON.stringify(configuration))}`);
      log(`configuration length: ${configuration.length}`);
      configuration.length > 0 ? this.parse4(configuration) : log(`completed`);
    }
  };
};
// Object.assign(newConfig, Object.values(configuration)[i]);
// return Object.values(configuration)[i];

/* 
Every directory is an array of objects
Every file is a single object

When it's a file, need to access Object.keys(fileObject)
When it's a directory, need to access until next 
*/

module.exports = {
  Library
};
