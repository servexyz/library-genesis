//First goal is to iterate through config and print all the things
const log = console.log;
function isFile(key) {
  return key.includes(".");
}
const iterate = config => {
  let c = Object.entries(config); //Array
  log(c);
};

module.exports = {
  iterate
};

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
