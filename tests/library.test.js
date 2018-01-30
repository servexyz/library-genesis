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

  const { config } = require("./config.sample.js");
  expect(config).toEqual(rawConfig);
});

test("config is iterated through", () => {
  const { iterate } = require("../index.js");
});
