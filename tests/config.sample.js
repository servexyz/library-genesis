let config = {
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

module.exports = { config };
