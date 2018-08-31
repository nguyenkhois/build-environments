# Build environments [![Download on npm](https://img.shields.io/badge/npm-v1.0.10-blue.svg)](https://www.npmjs.com/package/code-template-generator)

You can download [code-template-generator](https://www.npmjs.com/package/code-template-generator) that is a part of this project on npm.

You should be carefully before you want update these packages which founded in package.json to newer versions.

![How to use](./assets/code-template-generator.gif)

|Build environment|Support|Code splitting|Notes|
|---|:---:|:---:|:---|
|react-babel-6|JS|No|Using Babel Loader 7|
|react-babel-7|JS|No|Using Babel Loader 8 [without babel-preset-stage-x](https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets)|
|react-code-splitting|JS|[Yes]((https://webpack.js.org/guides/code-splitting/))|Using Babel 7 , Babel Loader 8 and [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)|
|react-typescript-3|TS|No|[Using TypeScript 3](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) (without Babel)|
|**Others**|||||
|macos|-|-|Using for testing purpose|
|react-flow|JS|No|Using Flow for type checking|
|react-js|JS|No|Using pure JavaScript|
|simple-react|JS|No|Without CSS|
|simple-react-css|JS|No||
|typescript-redux|TS|No||

