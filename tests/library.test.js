const log = console.log;
const { conA, conD } = require("./config.sample.js");

//////////////////////////////////////////
// Config copies
//////////////////////////////////////////
const localizedConA = {
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

const localizedConD = [
  {
    foo: [
      { "fileA.ext": { t: "/path/to/template.js", v: { Foo: "Bar" } } },
      { "fileB.ext": { c: "Foobar" } },
      { "fileC.ext": { s: "/path/to/file/to/symlink" } },
      {
        bar: [
          { "fileD.ext": { c: "Foobar" } },
          { "fileE.ext": { c: "Foobar" } },
          { "fileF.ext": { c: "Foobar" } }
        ]
      }
    ]
  },
  { "fileABC.ext": { c: "Foobar" } },
  {
    baz: [
      { "fileA.ext": { t: "/path/to/template.js", v: { Foo: "Bar" } } },
      { "fileB.ext": { c: "Foobar" } },
      { "fileC.ext": { s: "/path/to/file/to/symlink" } },
      {
        bax: [
          { "fileD.ext": { c: "Foobar" } },
          { "fileE.ext": { c: "Foobar" } },
          { "fileF.ext": { c: "Foobar" } }
        ]
      }
    ]
  },
  { "fileDEF.ext": { c: "Foobar" } }
];

//////////////////////////////////////////
// Tests
//////////////////////////////////////////

test("Config structure is accurate", () => {
  //TODO: Update to conD
  expect(conD).toEqual(localizedConD);
});

//This prints as expected, just obnoxious to see everytime
// test("Print config", () => {
//   const { Library } = require("../src/library-reduce.js");
//   // log(conD);
//   Library(conD).printConfig();
// });

test(
  "Parse config",
  () => {
    const { Library } = require("../src/library-reduce.js");
    Library(conD).parse4();
  },
  3000
);
