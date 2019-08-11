# The advance React Hooks project template
The project template is using React hooks, React Router, SASS, Babel, BrowserSync, ESLint,... and it support also HMR ([Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)) for both JavaScript and SCSS.

## Main features
* HMR ([Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)) is activated for both JS and SCSS that's why the page is not refresh whenever you make a change in your code.
* Synchronised browser testing.
* Directory `/dist` is deleted and then created automatic whenever you run the command `npm run build`.
* CSS (that is compiled automatic from SCSS) and JS files are injected automatic into the HTML template file `index.html`.
* Code splitting - Many JS entry points are supported and your code are compiled into the directory `/dist` with the three separate file extensions `*.html, *.css, *.js`.
* Image handling - Automatic copying the directory `/src/images` into `/dist` whenever you build your code or during the development.
* You can use `async`/ `await` for fetching data from API.

View more about the features on [here](https://github.com/nguyenkhois/build-environments).

## Main dependencies
Main packages:
* [React](https://reactjs.org/)
* [React Router](https://github.com/ReactTraining/react-router)
* [SASS](https://sass-lang.com/)
* [Babel](https://babeljs.io/docs/en) ([Babel 7 released](https://babeljs.io/blog/2018/08/27/7.0.0) and [removing Babel's stage presets](https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets))
* [Webpack](https://webpack.js.org/concepts/)
* [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)
* [BrowserSync](https://www.browsersync.io/)

Linting
* [ESLint](https://eslint.org/)
* [ESLint plugin React](https://github.com/yannickcr/eslint-plugin-react)
* [ESLint plugin React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* [Babel ESLint](https://github.com/babel/babel-eslint)

Other packages:
* [Babel Loader](https://github.com/babel/babel-loader)
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* [BrowserSync plugin for Webpack](https://github.com/Va1/browser-sync-webpack-plugin)
* [CSS Loader](https://github.com/webpack-contrib/css-loader)
* [Style Loader](https://github.com/webpack-contrib/style-loader)
* [Sass Loader](https://github.com/webpack-contrib/sass-loader)
* [Terser Plugin](https://github.com/webpack-contrib/terser-webpack-plugin)
* [Optimize CSS Assets Plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
* ... many more in `package.json`.


## Working directory
||Location|
|---|---|
|Source code|`/src`|
|Components|`/src/components`|
|Images|`/src/images`|
|Styles|`/src/styles`|
|HTML template|`/src/index.html`|
|Entry point|`/src/index.js`|
|Webpack Dev Server custom config|`/webpack.custom.js`|

Tested on:
* Windows 10 version 1903
* MacOS version 10.13
* Ubuntu version 18.04 LTS

## Using
* Run the command `npm install` to install all needed dependencies.
* Other commands:
    * `npm run start` - Starts Webpack Dev Server for development.
    * `npm run bs` - Starts Webpack Dev Server in development mode with BrowserSync plugin for cross browser testing.
    * `npm run build` - Bundles your app into the directory `/dist` for production.
* Local web server is started at `htpp://localhost:9000`

## References
* [Browserslist](https://github.com/browserslist/browserslist)
* [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/)
* [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)
