var templateVarC = { Foo: "Bar" };

const config = [
  (directory: {
    target: "/path/to/fooBar",
    file: { name: "fileA.ext", type: "plain", content: "Hello, fileA" },
    directory: {
      name: "baz",
      file: {
        target: "fileB.ext",
        type: "symlink",
        source: "/path/to/original"
      },
      file: {
        target: "fileC.ext",
        type: "template",
        source: "/path/to/template/file",
        variables: templateVarC
      },
      directory: {
        name: "bax",
        file: {
          target: "fileD.ext",
          type: "template",
          source: "/path/to/template/file",
          variables: { Baz: "Bax" }
        }
      }
    },
    file: {
      target: "fileE.ext",
      type: "symlink",
      source: "/path/to/original"
    },
    directory: {
      name: "baz",
      file: {
        target: "fileF.ext",
        type: "symlink",
        source: "/path/to/original"
      },
      file: {
        target: "fileG.ext",
        type: "template",
        source: "/path/to/template/file",
        variables: templateVarC
      },
      directory: {
        name: "bax",
        file: {
          target: "fileH.ext",
          type: "template",
          source: "/path/to/template/file",
          variables: { Baz: "Bax" }
        }
      }
    }
  })
];

module.exports = {
  con: config
};
