let dirs = {
  docs: "/path/to/library/docs",
  tests: "/path/to/library/tests"
};

let library = {
  directory: "/path/to/library",
  files: [
    { type: "file", dest: `${dirs.docs}/README.md`, content: "#README" },
    {
      type: "symlink",
      dest: `${dirs.docs}/file.ext`,
      content: {
        original: "/path/to/original/content/file.ext"
      }
    },
    {
      type: "template",
      dest: "/path/to/templates/sample.js",
      content: {
        original: "/path/to/original/content",
        variables: { foo: "Bar" }
      }
    }
  ]
};

module.exports = {
  con: library
};
