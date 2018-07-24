# React-Redux-TypeScript build enviroment
* React
* Redux
* TypeScript version 3.0.0-rc
* Webpack
* Webpack Dev Server
* Babel
* [CSS Loader](https://github.com/webpack-contrib/css-loader)
* [Style Loader](https://github.com/webpack-contrib/style-loader)
* Auto refresh
* Your own styles in file `./styles.css`

## Webpack config files
There are 3 files for Webpack and they are used for different reasons. You can see more here on [Webpack guide](https://webpack.js.org/guides/production/).
* `webpack.common.js`: common configs for webpack
* `webpack.dev.js`: using for your development
* `webpack.prod.js`: using for publishing your app

You can view detail in this file `package.json`.

Tested on:
* Windows 10 (version 1803)
* MacOS High Sierra (version 10.13)
* Debian 9

## Using
* Local web server started at: `htpp://localhost:9000`
* Commands:
    * `npm run start`: start Webpack Dev Server
    * `npm run build`: compile your app with production mode in Webpack