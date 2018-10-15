# Build environments [![Download on npm](https://img.shields.io/badge/npm-v1.3.8-blue.svg)](https://www.npmjs.com/package/code-template-generator)
You can download [code-template-generator](https://www.npmjs.com/package/code-template-generator) that is a part of this project on npm.

**NEW**: The new version `1.3.x` is also available on npm with these new features:
* All needed dependencies are installed automatic.
* `react-code-splitting` is using:
    * `/babel.config.js` for Babel config.
* Using `/.browserslistrc` for all these templates.
* Run the command: `$ generate <project-name> git` if you want to have the `.gitignore` file in the root of your project directory. It's optional.

Installation for the latest version: `$ npm i -g code-template-generator`

## Table of contents
* [Features](#features)
* [Screenshot](#screenshot)
* [Using](#using)
* [Details](#details)
* [Tips and tricks for these code templates](#tips-and-tricks)
    * [How can I check for outdated, incorrect, and unused dependencies?](#1-how-can-i-check-for-outdated-incorrect-and-unused-dependencies)
    * [How can I config Webpack Dev Server for React-Router v4?](#2-how-can-i-config-webpack-dev-server-for-react-router-v4)
    * [How can I use async/ await in React?](#3-how-can-i-use-async-await-in-react)
    * [How can I work with HTML5 responsive behaviors?](#4-how-can-i-work-with-html5-responsive-behaviors)
    * [How can I passed the CORS?](#5-how-can-i-passed-the-cors)
    * [How can I know about supported web browser?](#6-how-can-i-know-about-supported-web-browser)

## Features
* The user can use the commands `$ generate <project-name>`.
* Lightweight and effective code templates.
* It's easy to config and install other dependencies that you need to your project.
* Auto refresh whenever you make a change in your code.
* Directory `./dist` is deleted and then created automatic every time you run the command `npm run build`.
* CSS, JS files injected automatic into the HTML template file `index.html`.
* Using only for `react-code-splitting` template:
    * Code splitting: Your code compiled into directory `./dist` with three separate file extensions `*.html, *.css, *.js`.
    * Image handling: Auto copy only directory `./src/images` into `./dist` when you compile your code or during development -> Improve performance.
    * You can use `async`/ `await` for fetching data from API in your code.
* `.gitignore` file handling.


TIP! You should be carefully before you want update these packages which founded in package.json to newer versions.

## Screenshot
![How to use](./assets/code-template-generator.gif)

## Using
`$ generate <project-name> [git]`

| Argument | Requirement | Description |
|---|---|---|
| `<project-name>` | Required | Generate a project by a selected template |
| `[git]` | Optional | A `.gitignore` file will be created automatically on the root of project directory |

## Example
````
$ generate react-todo
$ generate react-counter git
````

## Details

||react-babel-6|react-babel-7|react-code-splitting|react-typescript-3
|---|:--:|:--:|:--:|:--:|
|Language|JS|JS|JS|TS|
|TypeScript|-|-|-|3|
|Babel core|6|7|7|-|
|Babel Loader|7|8|8|-|
|Config file|.babelrc|.babelrc|babel.config.js|tsconfig.json|
|All needed dependencies are installed automatic|X|X|X|X|
|Using `.browserslistrc`|X|X|X|X|
|`.gitignore` handling|X|X|X|X|
|CSS, JS files injected automatic into the HTML template file|X|X|X|X|
|Distribution directory is deleted and then created automatic during the app building|X|X|X|X|
|Image handling|-|-|X|-|
|Code splitting|-|-|X|-|
|Support async/ await|-|-|X|-|

## Tips and tricks
#### 1. How can I check for outdated, incorrect, and unused dependencies?

Using [npm-check](https://www.npmjs.com/package/npm-check). It's amazing! (^_~)

[Go to top](#build-environments-)

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
[Go to top](#build-environments-)

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
[Go to top](#build-environments-)

#### 4. How can I work with HTML5 responsive behaviors?
Using this HTML code in your HTML file:
````
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
````
[Go to top](#build-environments-)

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
[Go to top](#build-environments-)

#### 6. How can I know about supported web browser?

Run `npx browserslist` in project directory to see what browsers was selected by your queries.

You may want to view about [Browserslist here](https://github.com/browserslist/browserslist) and then you can change the default config in this file `/.browserslistrc`.

[Go to top](#build-environments-)