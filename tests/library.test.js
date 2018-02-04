const log = console.log;
const { conE } = require("./config.sample.js");
//This prints as expected, just obnoxious to see everytime
test("Print config", () => {
  const { Library } = require("../src/library-reduce.js");
  // log(conD);
  Library(conE).printConfig();
});

test(
  "Parse config",
  () => {
    const { Library } = require("../src/library-reduce.js");
    Library(conE).parse();
  },
  3000
);
