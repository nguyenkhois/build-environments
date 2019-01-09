# Build environments [![Download on npm](https://img.shields.io/badge/npm-v1.4.6-blue.svg)](https://www.npmjs.com/package/code-template-generator)
This project is a part of [code-template-generator](https://www.npmjs.com/package/code-template-generator) on npmjs.com.

More information:
* code-template-generator version 1:
    * View information [here](CTG1.md).
    * Download on npmjs.com [here](https://www.npmjs.com/package/code-template-generator).
* code-template-generator version 2 alpha:
    * View information [here](CTG2.md).
    * Download on npmjs.com [here](https://www.npmjs.com/package/code-template-generator/v/alpha).

> __2019-01-09__: The new beta version 2.0.0-beta.1.0.0 is now on npmjs.com. The next step is the release version that is comming soon.

## Table of contents
* [Detail information for these project templates](#detail-information)
* [Work directory](#work-directory)
* [Tips and tricks](HOWTO.md)
    
## Detail information for these project templates
||react-babel-6|react-babel-7|react-code-splitting|react-typescript-3
|---|:--:|:--:|:--:|:--:|
|Programming language|JS|JS|JS|TS|
|TypeScript|-|-|-|v3|
|Babel core|v6|v7|v7|-|
|Babel Loader|v7|v8|v8|-|
|Config file|.babelrc|.babelrc|babel.config.js|tsconfig.json|
|All needed dependencies are installed automatic|X|X|X|X|
|Auto refresh whenever you make a change in your code|X|X|X|X|
|CSS, JS files injected automatic into the HTML template file `index.html`|X|X|X|X|
|Distribution directory `./dist` is deleted and then created automatic during the app building|X|X|X|X|
|Using `.browserslistrc`|X|X|X|X|
|`.gitignore` handling|X|X|X|X|
|Image handling|-|-|X|-|
|Code splitting|-|-|X|-|
|Support async/ await|-|-|X|-|
|Hot Module Replacement (HMR) enabled for CSS|-|-|X|-|

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

