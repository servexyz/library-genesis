const { iterate } = require("../index.js");
const log = console.log;

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

test("config contains config", () => {
  const config = require("./config.sample.js");
  let lib = iterate(config);
  expect(config).toBe(rawConfig);
});
