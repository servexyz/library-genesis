const log = console.log;
const chalk = require("chalk");

/* Assumptions:
* Config represents current root directory.
* It will contain unknown number of files and directories
* Files and directories will be nested an unknown number of times
*/

function Library() {
  // log(`pathToGenerateLibrary: ${pathToGenerateLibrary}`);
}
Library.prototype.generate = function(config) {
  log(`Inside config. ${typeof config}`);
  this.config = config;
  log(`config in generate: ${JSON.stringify(config)}`);
  log(`Inside config. ${typeof config}`);
  // log(`config this: ${JSON.stringify(this.directory)}`);
  if (Object.keys(config).length > 0) {
    log(
      `more things to be configured. \n ${chalk.blue(JSON.stringify(config))}`
    );
    this.directory(config);
  } else {
    log(`No mo' nodes`);
  }
  log(`Completed config`);
};

Library.prototype.directory = function(directory) {
  log(`directory: ${directory}`);
  let directories = {};
  for (let node in directory) {
    log(`Node: ${directory[node]}`);
    if (this.getType(directory[node]) === "file") {
      log(`file: ${directory[node]}`);
    } else {
      log(`directory: ${directory[node]}`);
      Object.assign(directories, directory[node]);
    }
  }
  return Object.keys(directories).length > 0
    ? this.directory(directories)
    : true;
};

Library.prototype.getType = function(node) {
  log(`getType this: ${JSON.stringify(this)}`);
  log(`Checking ${chalk.yellow(node)}'s type`);
  let type = String(node).includes(".");
  return type === true ? "file" : "directory";
  //TODO: Add warning that if directory contains period, everything breaks.
};

module.exports = {
  Library
};
//var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// let a = x.reduce((sum, order) => {
//   return sum + order;
// });
/*
//////////////////////////////////
A-Input
//////////////////////////////////

  let c = Object.entries(config); //Array
  log(c);

//////////////////////////////////
A-Output
//////////////////////////////////

  console.log src/library.js:8
    [ [ 'foo',
        { 'fileA.ext': [Object],
          'fileB.ext': [Object],
          'fileC.ext': [Object],
          bar: [Object] } ] ]

*/

/*
//////////////////////////////////
B-Input
//////////////////////////////////

for (const [k, v] of Object.entries(config)) {
    if (isFile(k)) {
      log("isFile", isFile(k));
      log("k", k);
    } else {
      log("v", v);
    }
  }

//////////////////////////////////
B-Output
//////////////////////////////////
  console.log src/library.js:4
    key: foo

  console.log src/library.js:15
    v { 'fileA.ext': { t: '/path/to/template.js', v: { Foo: 'Bar' } },
      'fileB.ext': { c: 'Foobar' },
      'fileC.ext': { s: '/path/to/file/to/symlink' },
      bar: 
       { 'fileD.ext': { c: 'Foobar' },
         'fileE.ext': { c: 'Foobar' },
         'fileF.ext': { c: 'Foobar' } } }

*/
