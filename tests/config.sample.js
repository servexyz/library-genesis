const path = require("path");
let root = path.join(__dirname, "sandbox");

let dirs = {
  d: "docs",
  t: "templates"
};

let library = {
  directory: root,
  files: [
    { type: "file", dest: `${root}/${dirs.d}/README.md`, content: "#README" },
    {
      type: "symlink",
      dest: `${root}/file.ext`,
      content: {
        original: `${root}/${dirs.d}/README.md`
        // original: path.join(__dirname, "../README.md")
      }
    },
    {
      type: "template",
      dest: `${root}/comp.js`,
      content: {
        original: `${root}/${dirs.t}/sample.template.js`,
        variables: { component: "Foobar" }
      }
    }
  ]
};

module.exports = {
  con: library
};
