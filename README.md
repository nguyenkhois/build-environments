# Build environments [![code-template-generator](https://img.shields.io/npm/v/code-template-generator.svg?style=flat)](https://www.npmjs.com/package/code-template-generator/)
This project is a part of [code-template-generator](https://www.npmjs.com/package/code-template-generator) on npmjs.com.

__The next tasks:__
- [ ] Using Webpack 5

__Project template name changing:__
* react-code-splitting -> react-advance
* react-babel-7 -> react-simplification
* react-typescript-3 -> react-typescript

## Table of contents
* [Detail information for these project templates](#detail-information)
* [Work directory](#work-directory)
* [Tips and tricks](HOWTO.md)
    
## Detail information for these project templates
||react-simplification|react-advance|react-typescript|
|---|:--:|:--:|:--:|
|Programming language|JS|JS|TS|
|TypeScript version|-|-|3|
|Babel core version|7|7|-|
|Babel Loader version|8|8|-|
|Config file|.babelrc|babel.config.js|tsconfig.json|
|All needed dependencies are installed automatic|X|X|X|
|Auto refresh whenever you make a change in your code|X|X|X|
|CSS, JS files injected automatic into the HTML template file `index.html`|X|X|X|
|Anti-caching - Distribution directory `./dist` is deleted and then created automatic during the app building|X|X|X|
|Using `.browserslistrc`|X|X|X|
|Image handling|-|X|-|
|Code splitting|-|X|-|
|Support async/ await|-|X|-|
|Hot Module Replacement (HMR) enabled for CSS|-|X|-|
|Client performance optimization|-|X|-|

TIP! You should be carefully before you want update these packages which founded in package.json to newer versions.

## Work directory
````
/
|--dist
|--src
|   |--images
|   |--index.html
|   |--index.js
|   |--...
|--package.json
|--...
````
Your application is within the `/src` directory:
* `images` directory is using to store all images are used in your application.
* `index.html` is the main HTML template.
* `index.js` is the main entry point for your code.

You don't need to care about the `/dist` directory (distribution/ publish). It is deleted and then created automatic during the application building when you run the command `npm start` or `npm run build`.

