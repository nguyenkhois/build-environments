## For the code-template-generator version 2 [![Download on npm](https://img.shields.io/badge/npm-v2.0.0.beta-blue.svg)](https://www.npmjs.com/package/code-template-generator/v/alpha)

Restructure
- [x] Code refactoring.
- [ ] Remove Babel 6 template.

Performance - UX:
- [x] Improve performance
- [x] Easier to install and use
- [x] More consequence
- [x] Friendly error message or help information

New features:
- [x] `-g`: New argument to run `git init` automatic while generate the template.
- [x] `-c`: New argument to generate a React component file (*.js | *.jsx) in the current directory.
- [x] `-r`: New argument to generate a React-Redux component file (*.js | *.jsx) in the current directory.
- [x] `-fc`: New argument to generate a full React component that is a directory with `*.js, *.css`.
- [x] `-fr`: New argument to generate a full React-Redux component that is a directory with `*.js, *.css`.
- [x] `-i`: New argument to generate a `.gitignore` file in the current directory.

Breaking changes:
- [x] The `git` support option.
    * Version 1: `$ generate react-counter git`
    * Version 2: `$ generate -g react-counter`
- [x] Requirement for Nodejs is >= version 8.0.0

#### Installation:
`$ npm i -g code-template-generator@next`

#### Using for version 2
`$ generate [option] <project-name>[<component-name>]`

| Argument | Used with | Description |
|:---:|:---:|---|
| `<project-name>` | - |  Generate a new project by the selected code template (without Git support) |
|`-g`|`<project-name>`| Git is installed automatically (`git init`) and a `.gitignore` file is also created on the root of work directory while a new project is generated|
|`-c`|`<component-name.js>`|It will be generate a React component `(*.js or *.jsx)` in the current directory and you decide its name|
|`-r`|`<component-name.js>`|It will be generate a React-Redux component `(*.js or *.jsx)` in the current directory and you decide its name|
|`-fc`|`<component-name>`|It will be generate a full React component (a directory with `*.js, *.css`) in the current directory and you decide its name|
|`-fr`|`<component-name>`|It will be generate a full React-Redux component (a directory with `*.js, *.css`) in the current directory and you decide its name|
| `-i` |-| A `.gitignore` file will be generated in the current directory |
|`-v`|-|View the installed version|
|`-help`|-|View the help information|

Example:
````
$ generate new-project
$ generate -g other-project
$ generate -c ProductList.js
$ generate -c Payment.jsx
$ generate -r Cart.js
$ generate -fc Product
$ generate -fr ShoppingCart
$ generate -i
$ generate -v
$ generate -help
````