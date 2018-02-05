# Library-Genesis

Convert config into library scaffolding

---

### Config

---

> [sample.config.js](./tests/config.sample.js)

#### Keys - `Types`

**Required in config**

* top-level / parent `directory`
  > Special directory. Contains all other files & directories

**Optional in config**

* nested / child `file`
  > Contains a single object of descriptor keys
* nested / child `directory`
  > Contains a "target" descriptor key & nested file/directories

#### Keys - `Descriptors`

**Directories & files**

* `target` : string

  > file/directory name

  * parent directory = _"/path/to/root/directory"_
  * children files & directories = _"foobar.ext"_

**Files**

* `type` : string

  > Used with file types.
  > Options: "plain", "symlink", or "template"
  > See [file-genesis](https://www.npmjs.com/package/file-genesis) for more info

* `content` : string

  > Used with "plain" to insert standard text (UTF-8)

* `source` : string

  > Used with "symlink" or "templates" to specify source file
  > Symlink --> File to be linked to by target
  > Template --> File to be interpolated with variables

* `variables` : object
  > Used with "template"
  > See [content-genesis](https://www.npmjs.com/package/content-genesis) for more info on template interpolation

---

### Docs

---

* [library-brainstorm](./docs/library-brainstorm.md)
  > Initial thoughts on config & lib generation
* [todo](./docs/todo.md)
  > Tasks bundled by release version

---

### Goals

---

* Enable creation of broad-spectrum modules (helper libs, cli's, ui libs, etc.)
* Address issues presented by boilerplates and toolkits
* Can still be useful after initial creation of project

---

### Related

---

* `content-genesis`

  > [@github](https://github.com/servexyz/content-genesis) | [@npm](https://www.npmjs.com/package/content-genesis)

* `file-genesis`

  > [@github](https://github.com/servexyz/file-genesis) | [@npm](https://www.npmjs.com/package/file-genesis)
