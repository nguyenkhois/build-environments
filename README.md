# Build environments [![Download on npm](https://img.shields.io/badge/npm-v1.2.1-blue.svg)](https://www.npmjs.com/package/code-template-generator)
You can download [code-template-generator](https://www.npmjs.com/package/code-template-generator) that is a part of this project on npm.

**NEXT**: The next version `1.3.x-next` is also available on npm with these new features:
* All needed dependencies are installed automatic.
* `react-code-splitting-next` is using:
    * `/babel.config.js` for Babel config.
    * `/.browserslistrc` for supported web browser config.
* Installation for the next version: `$ npm i -g code-template-generator@next`

## Table of contents
* [Features](#features)
* [Screenshot](#screenshot)
* [Details](#details)
* [Tips and tricks for these code templates](#tips-and-tricks)
    * [How can I check for outdated, incorrect, and unused dependencies?](#1-how-can-i-check-for-outdated-incorrect-and-unused-dependencies)
    * [How can I config Webpack Dev Server for React-Router v4?](#2-how-can-i-config-webpack-dev-server-for-react-router-v4)
    * [How can I use async/ await in React?](#3-how-can-i-use-async-await-in-react)
    * [How can I work with HTML5 responsive behaviors?](#4-how-can-i-work-with-html5-responsive-behaviors)
    * [How can I passed the CORS?](#5-how-can-i-passed-the-cors)
    * [How can I know about supported web browser?](#6-how-can-i-know-about-supported-web-browser)

## Features
* The user can use both two commands `$ generate` or `$ generate <project-name>`. (It's available from version `1.2.0`)
* Lightweight and effective code templates.
* It's easy to config and install other dependencies that you need to your project.
* Auto refresh whenever you make a change in your code.
* Directory `./dist` is deleted and then created automatic every time you run the command `npm run build`.
* CSS, JS files injected automatic into the HTML template file `index.html`.
* Using only for `react-code-splitting` template:
    * Code splitting: Your code compiled into directory `./dist` with three separate file extensions `*.html, *.css, *.js`.
    * Image handling: Auto copy only directory `./src/images` into `./dist` when you compile your code or during development -> Improve performance.
    * You can use `async`/ `await` for fetching data from API in your code.

TIP! You should be carefully before you want update these packages which founded in package.json to newer versions.

## Screenshot
![How to use](./assets/code-template-generator.gif)

## Details

|Template|Support|Code splitting|Main dependencies|
|---|:---:|:---:|:---|
|react-babel-6|JS|No|Babel 6, Babel Loader 7|
|react-babel-7|JS|No|Babel 7 [without Babel's Stage Presets](https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets), Babel Loader 8|
|react-code-splitting|JS|[Yes](https://webpack.js.org/guides/code-splitting/)|Babel 7, Babel Loader 8 and [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)|
|react-typescript-3|TS|No|[TypeScript 3](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) without Babel|
|**Others**|||**Notes**|
|macos|JS|No|Using for testing purpose|
|react-flow|JS|No|Using Flow for type checking|
|react-js|JS|No||
|simple-react|JS|No|Without CSS module|
|simple-react-css|JS|No||
|typescript-redux|TS|No||

## Tips and tricks
#### 1. How can I check for outdated, incorrect, and unused dependencies?

Using [npm-check](https://www.npmjs.com/package/npm-check). It's amazing! (^_~)

#### 2. How can I config Webpack Dev Server for React-Router v4?

Add these code to Webpack config files:

_webpack.common.js_
````
output: {
    ...
    publicPath: '/'
    ...
}
````

_webpack.dev.js_
````
devServer: {
    ...
    historyApiFallback: true
    ...
}
````

#### 3. How can I use async/ await in React?

Add these code to Babel config file (`.babelrc` or `babel.config.js`):
````
"presets": [
        [
            "@babel/preset-env", 
            {
                "targets": 
                    {
                        "node": "10"
                    }
            }
        ],
        ...
    ]
````

Example

````
import React, { Component } from 'react';

class Menu extends Component {
    async handleClick() {
        const fetchURL = 'your_url_here';
        const response = await fetch(fetchURL);
        await response.json()
                .then((collection) => {
                    console.log(collection);
                });
        
    }

    render() {
        ...
    }
}
````

#### 4. How can I work with HTML5 responsive behaviors?
Using this HTML code in your HTML file:
````
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
````

#### 5. How can I passed the CORS?
You may want to view about [Cross-Origin Resource Sharing (CORS)
](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on MDN and here is a little recomendation for `index.html`:
````
<meta http-equiv="Content-Security-Policy"
        content="default-src * 'unsafe-inline' 'unsafe-eval'; 
                script-src * 'unsafe-inline' 'unsafe-eval' 'self'; 
                connect-src * 'unsafe-inline'; 
                img-src * data: blob: 'unsafe-inline'; 
                frame-src *; 
                style-src * 'unsafe-inline';">
````

#### 6. How can I know about supported web browser?

Run `npx browserslist` in project directory to see what browsers was selected by your queries.

You may want to view about [Browserslist here](https://github.com/browserslist/browserslist) and then you can change the default config in this file `/.browserslistrc`.