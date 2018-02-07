const log = console.log;
const { con } = require("./config.sample.js");

/*
  Config test below ( should ) work. 
  Commented because obnoxious to see every time.
*/
// test("Print config", () => {
//   const { Library } = require("../src/library.js");
//   Library(con).printConfig();
// });

test("Parse config", () => {
  const { Library } = require("../src/library.js");
  Library(con).generate();
});

test("API is imported", () => {
  const { Library } = require("../index.js");
  Library(con).generate();
});
