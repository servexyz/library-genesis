const log = console.log;
const { conA, conD } = require("./config.sample.js");

test("Config structure is accurate", () => {
  const rawConfig = {
    directory: [
      { "fileA.ext": { t: "/path/to/template.js", v: { Foo: "Bar" } } },
      { "fileB.ext": { c: "Foobar" } },
      { "fileC.ext": { s: "/path/to/file/to/symlink" } },
      {
        directory: [
          { "fileD.ext": { c: "Foobar" } },
          { "fileE.ext": { c: "Foobar" } },
          { "fileF.ext": { c: "Foobar" } }
        ]
      }
    ]
  };
  //TODO: Update to conD
  expect(conA).toEqual(rawConfig);
});

test("Print config", () => {
  const { Library } = require("../src/library-reduce.js");
  log(conD);
  Library(conD).printConfig();
});

test("Parse config", () => {
  const { Library } = require("../src/library-reduce.js");
  Library(conD).parse();
});
