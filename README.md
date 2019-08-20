# Build environments [![code-template-generator](https://img.shields.io/npm/v/code-template-generator.svg?style=flat)](https://www.npmjs.com/package/code-template-generator/)
The project is a part of the Node.js application [code-template-generator](https://www.npmjs.com/package/code-template-generator) on npmjs.com.

__The next tasks:__
- [x] Create extend project templates for other reasons.
- [x] Using React Hooks for the project templates (both JavaScript and TypeScript).
- [ ] Create a project template with Gulp, BrowserSync, Browserify that is using for front-end developers when coding with plain JS (ES5, ES6) or jQuery and back-end like PHP (Press F5 is always a boring job :-P).
- [ ] Using Webpack 5

## Table of contents
* [Detail information for these project templates](#detail-information)
* [Work directory](#work-directory)
* [Tips and tricks](HOWTO.md)
    
## Detail information for the main project templates
||react-hooks|react-sass|react-hooks-typescript|
|---|:--:|:--:|:--:|
|Programming language|JS|JS|TS|
|TypeScript version|-|-|3|
|Babel core version|7|7|-|
|Babel Loader version|8|8|-|
|Config file|babel.config.js|babel.config.js|tsconfig.json|
|All needed dependencies are installed automatic|✓|✓|✓|
|Auto refresh whenever you make a change in your code|✓|✓|✓|
|CSS, JS files injected automatic into the HTML template file `index.html`|✓|✓|✓|
|Anti-caching - Distribution directory `/dist` is deleted and then created automatic during the app building|✓|✓|✓|
|Using `.browserslistrc`|✓|✓|✓|
|Image handling|✓|✓|✓|
|Code splitting|✓|✓|✓|
|Support async/ await|✓|✓|✓|
|Hot Module Replacement (HMR) enabled for CSS|✓|✓|✓|
|Client performance optimization|✓|✓|✓|
|CSS minification for production (*)|✓|✓|✓|
|JS minification for production (**)|✓|✓|✓|

(*) Using [Optimize CSS Assets Plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin).

(**) Using [Terser Plugin](https://webpack.js.org/plugins/terser-webpack-plugin/).

__BE WARE__! You should be check about compatibility before you update the dependencies that are founded in package.json to newer versions.

## Other project templates
You can view other project templates in `extend-templates` and use them for your reasons.

## Work directory
````
/
|--/dist
|--/src
|    |--/images
|    |--index.html
|    |--index.js
|    |--...
|--package.json
|--...
````
Your application is within the `/src` directory:
* `images` directory is using to store all images are used in your application.
* `index.html` file is the main HTML template.
* `index.js` file is the main entry point for your application.

You don't need to care about the `/dist` directory (distribution directory). It is deleted and then created automatic during the application building when you run the command `npm run build`.

