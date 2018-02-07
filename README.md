# Library-Genesis

Convert config into library scaffolding

---

### Getting Started

---

**Install**

```
yarn add library-genesis
```

**Summary**

1. Create config and import it
2. Import `{ Library }` from `library-genesis`
3. Call `Library(config).parse()`

**Code**

```js
const { myLibConfig } = require("./path/to/my-config.js");
const { Library } = require("library-genesis");
Library(myLibConfig).generate();
```

---

### Config

---

> [sample.config.js](./tests/config.sample.js)

---

### Docs

---

* [todo](./docs/todo.md)

  > Tasks bundled by release version

* [library-brainstorm](./docs/library-brainstorm.md)
  > Initial thoughts on config & lib generation

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

```

```
