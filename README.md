# Build environments [![Download on npm](https://img.shields.io/badge/npm-v1.1.12-blue.svg)](https://www.npmjs.com/package/code-template-generator)
You can download [code-template-generator](https://www.npmjs.com/package/code-template-generator) that is a part of this project on npm.

## Features
* Lightweight and effective code templates.
* It's easy to config what you need and install other dependencies to your project.
* It works automatic whenever your code compiles:
    * Cleaning distribution directory -> A fresh version for publishing is always ready.
    * Splitting your code to smaller files by file types *.html, *.css, *.js -> Performance improvement
    * CSS, JS injected into your HTML template file.
    * Image handling
* Auto refresh whenever you make a change in your code.

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
1. How can I check for outdated, incorrect, and unused dependencies?

Using [npm-check](https://www.npmjs.com/package/npm-check). It's amazing! (^_~)

2. How can I config Webpack Dev Server for React-Router v4?

Add these code to Webpack config files:

webpack.common.js
````
output: {
    ...
    publicPath: '/'
    ...
}
````

webpack.dev.js
````
devServer: {
    ...
    historyApiFallback: true
    ...
}
````

3. How can I use async/ await i React?

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