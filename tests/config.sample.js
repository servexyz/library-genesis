//Don't change config_a without updating library.test.js
const config_a = {
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

const config_b = {
  directory: [
    { "fileA.ext": { t: "/path/to/template.js", v: { Foo: "Bar" } } },
    { "fileB.ext": { c: "Foobar" } },
    { "fileC.ext": { s: "/path/to/file/to/symlink" } },
    { "fileD.ext": { c: "Foobar" } },
    { "fileE.ext": { c: "Foobar" } },
    { "fileF.ext": { c: "Foobar" } }
  ]
};

const config_c = {
  directory: [
    { "fileA.ext": { t: "/path/to/template.js", v: { Foo: "Bar" } } },
    {
      directory: [
        { "fileD.ext": { c: "Foobar" } },
        { "fileE.ext": { c: "Foobar" } },
        { "fileF.ext": { c: "Foobar" } }
      ]
    },
    { "fileB.ext": { c: "Foobar" } },
    {
      directory: [
        { "fileD.ext": { c: "Foobar" } },
        { "fileE.ext": { c: "Foobar" } },
        {
          directory: [
            { "fileD.ext": { c: "Foobar" } },
            { "fileE.ext": { c: "Foobar" } },
            { "fileF.ext": { c: "Foobar" } }
          ]
        },
        { "fileF.ext": { c: "Foobar" } }
      ]
    },
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

config_d = [
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

/*
  1. Files contain objects
  2. Directories contain string: {object}
  When ndirectories are nestedthey 
*/

module.exports = {
  conA: config_a,
  conB: config_b,
  conC: config_c,
  conD: config_d
};
