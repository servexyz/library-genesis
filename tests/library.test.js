const log = console.log;

test("config contains config", () => {
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

  const { conA } = require("./config.sample.js");
  expect(conA).toEqual(rawConfig);
});

test("config is iterated through", () => {
  const { iterate } = require("../src/library.js");
  const { conD } = require("./config.sample.js");
  iterate(conD);
});
