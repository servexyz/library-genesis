# library-genesis

Convert config into library scaffolding

## Config

### Type Keys

* `file`
  > Contains a single object of descriptor keys
* `directory`
  > Contains a "target" descriptor key & nested file/directories

### Descriptor Keys

**Always**

* `target` : string
  > file name
* `type` : string
  > "plain", "symlink", or "template"
  > See [file-genesis](https://www.npmjs.com/package/file-genesis) for more info

**Sometimes**

* `content` : string
  > Used with "plain" to insert standard text (UTF-8)
* `source` : string
  > Used with "symlink" or "templates" to specify source file
  > Symlink --> File to be linked to by target
  > Template --> File to be interpolated with variables
* `variables` : object
  > Used with "template"
  > See [content-genesis](https://www.npmjs.com/package/content-genesis) for more info on template interpolation

**name**

### Sample

> [sample.config.js](./tests/config.sample.js)

```js
const config_e = {
  root: {
    target: "fooBar",
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
