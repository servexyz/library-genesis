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

let Library = config => {
  config.reduce();
};
const iterate = (all, current) => {
  log(`All: ${all}`);
  log(`Current: ${current}`);
  return (all += current);
};

module.exports = {
  Library
};
