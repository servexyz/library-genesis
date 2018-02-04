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
      //root, file, directory
      // log(configuration.root);
      // for (let [k, v] of Object.entries(configuration.root)) {
      //   log(k, ": ", v);
      // }
      log(configuration);
      Object.entries(configuration.root)
        .map(node => {
          return node[0] == "directory" ? node : log("dir ", node);
        })
        .map(n => {
          log("n ", n);
        });
      // .map(dir => log(`Remaining dir ${JSON.stringify(dir, null, 2)}`));
      // .filter(node => node[0] == "directory")
    }
  };
};

/*

  console.log src/library-reduce.js:23
    { target: '/path/to/fooBar',
      file: { name: 'fileA.ext', type: 'plain', content: 'Hello, fileA' },
      directory: 
       { name: 'baz',
         file: 
          { target: 'fileC.ext',
            type: 'template',
            source: '/path/to/template/file',
            variables: [Object] },
         directory: { name: 'bax', file: [Object] } } }

  console.log src/library-reduce.js:25
    target :  /path/to/fooBar

  console.log src/library-reduce.js:25
    file :  { name: 'fileA.ext', type: 'plain', content: 'Hello, fileA' }

  console.log src/library-reduce.js:25
    directory :  { name: 'baz',
      file: 
       { target: 'fileC.ext',
         type: 'template',
         source: '/path/to/template/file',
         variables: { Foo: 'Bar' } },
      directory: 
       { name: 'bax',
         file: 
          { target: 'fileD.ext',
            type: 'template',
            source: '/path/to/template/file',
            variables: [Object] } } }
*/
module.exports = {
  Library
};
