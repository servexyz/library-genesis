const path = require("path");
let dirs = {
  root: path.join(__dirname, "sandbox"),
  docs: "docs",
  tests: "tests",
  templates: "templates"
};

let library = {
  directory: dirs.root,
  files: [
    { type: "file", dest: `${dirs.root}/README.md`, content: "#README" },
    {
      type: "symlink",
      dest: `${dirs.root}/file.ext`,
      content: {
        original: path.join(__dirname, "../README.md")
      }
    },
    {
      type: "template",
      dest: `${dirs.root}/comp.js`,
      content: {
        original: `${dirs.root}/templates/sample.template.js`,
        variables: { component: "Foobar" }
      }
    }
  ]
};

module.exports = {
  con: library
};
