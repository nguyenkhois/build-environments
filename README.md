# Build environments [![code-template-generator](https://img.shields.io/npm/v/code-template-generator.svg?style=flat)](https://www.npmjs.com/package/code-template-generator/)
The project is a part of the Node.js application [code-template-generator](https://www.npmjs.com/package/code-template-generator) on npmjs.com.

__The next tasks:__
- [x] Upgrade the `react-typescript` template
- [x] Minification for production
- [x] Add a new project template for using React Hooks
- [ ] Using Webpack 5

## Table of contents
* [Detail information for these project templates](#detail-information)
* [Work directory](#work-directory)
* [Tips and tricks](HOWTO.md)
    
## Detail information for the main project templates
||react-simplification|react-advance|react-typescript|
|---|:--:|:--:|:--:|
|Programming language|JS|JS|TS|
|TypeScript version|-|-|3|
|Babel core version|7|7|-|
|Babel Loader version|8|8|-|
|Config file|.babelrc|babel.config.js|tsconfig.json|
|All needed dependencies are installed automatic|✓|✓|✓|
|Auto refresh whenever you make a change in your code|✓|✓|✓|
|CSS, JS files injected automatic into the HTML template file `index.html`|✓|✓|✓|
|Anti-caching - Distribution directory `/dist` is deleted and then created automatic during the app building|✓|✓|✓|
|Using `.browserslistrc`|✓|✓|✓|
|Image handling|-|✓|✓|
|Code splitting|-|✓|✓|
|Support async/ await|-|✓|✓|
|Hot Module Replacement (HMR) enabled for CSS|-|✓|✓|
|Client performance optimization|-|✓|✓|
|Minification for production (Code)|✓ (*)|✓ (**)|✓ (**)|
|Minification for production (CSS)|-|✓|✓|

(*) Using Webpack

(**) Using terser-webpack-plugin

TIP! You should be carefully before you want update the dependencies that are founded in package.json to newer versions.

## Other project templates
* The template `react-hooks` is based on the current template `react-advance`. The difference is only using [React Hooks](https://reactjs.org/docs/hooks-intro.html).

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

You don't need to care about the `/dist` directory (distribution/ publish). It is deleted and then created automatic during the application building when you run these commands `npm start` or `npm run build`.

