# Build environments [![Download on npm](https://img.shields.io/badge/npm-v1.2.0-blue.svg)](https://www.npmjs.com/package/code-template-generator)
You can download [code-template-generator](https://www.npmjs.com/package/code-template-generator) that is a part of this project on npm.

NEXT: The next version `1.3.x` is also available on npm with these new features:
* The user can use both two commands `$ generate` or `$ generate <project-name>`. (It's available also in version `1.2.0` or later)
* All needed dependencies are installed automatic.
* `react-code-splitting` is using `babel.config.js` for Babel config.

## Table of contents
* [Features](#features)
* [Screenshot](#screenshot)
* [Details](#details)
* [Tips and tricks for these code templates](#tips-and-tricks)
    * How can I check for outdated, incorrect, and unused dependencies?
    * How can I config Webpack Dev Server for React-Router v4?
    * How can I use async/ await in React?

## Features
* Lightweight and effective code templates.
* It's easy to config what you need and install other dependencies to your project.
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
__1. How can I check for outdated, incorrect, and unused dependencies?__

Using [npm-check](https://www.npmjs.com/package/npm-check). It's amazing! (^_~)

__2. How can I config Webpack Dev Server for React-Router v4?__

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

__3. How can I use async/ await in React?__

Add these code to Babel config file (`.babelrc`):
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