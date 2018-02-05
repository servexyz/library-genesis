const log = console.log;
const { con, con2 } = require("./config.sample.js");
//This prints as expected, just obnoxious to see everytime
test("Print config", () => {
  const { Library } = require("../src/library-reduce.js");
  // log(conD);
  Library(con).printConfig();
});

test(
  "Parse config",
  () => {
    const { Library } = require("../src/library-reduce.js");
    Library(con2).parse2();
  },
  3000
);
