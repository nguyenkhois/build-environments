# Tips and tricks

## Table of contents
* [How can I check for outdated, incorrect, and unused dependencies?](#1-how-can-i-check-for-outdated-incorrect-and-unused-dependencies)
* [How can I config Webpack Dev Server for React-Router v4?](#2-how-can-i-config-webpack-dev-server-for-react-router-v4)
* [How can I use async/ await in React?](#3-how-can-i-use-async-await-in-react)
* [How can I work with HTML5 responsive behaviors?](#4-how-can-i-work-with-html5-responsive-behaviors)
* [How can I passed the CORS?](#5-how-can-i-passed-the-cors)
* [How can I know about supported web browser?](#6-how-can-i-know-about-supported-web-browser)
* [How can I use code splitting in React?](#7-how-can-i-use-code-splitting-in-react)

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


#### 7. How can I use code splitting in React?
You may want to view these things:
* [React guide](https://reactjs.org/docs/code-splitting.html).
* The simple example [here](https://github.com/nguyenkhois/react-code-splitting-example).
