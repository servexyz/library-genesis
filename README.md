# Library-Genesis

Convert config into library scaffolding

## Library-Genesis :: `Config`

> Jump to [keys](#keys)

### Config :: `Sample`

> [sample.config.js](./tests/config.sample.js)

```js
const config = {
  directory: {
    target: "/path/to/fooBar",
    file: { target: "fileA.ext", type: "plain", content: "Hello, fileA" },
    directory: {
      target: "baz",
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
        target: "bax",
        file: {
          target: "fileD.ext",
          type: "template",
          source: "/path/to/template/file",
          variables: { Baz: "Bax" }
        }
      }
    }
  }
};
```

### Config :: `Keys`

#### Keys :: `Types`

**Required in config**

* top-level / parent `directory`
  > Special directory. Contains all other files & directories

**Optional in config**

* nested / child `file`
  > Contains a single object of descriptor keys
* nested / child `directory`
  > Contains a "target" descriptor key & nested file/directories

#### Keys :: `Descriptors`

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
