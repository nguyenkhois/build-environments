# code-template-generator (version 1)

## Table of content
* [What's new](#whats-new)
* [Features](#features)
* [Screenshot](#screenshot)
* [Installation](#installation)
* [Using](#using)
* [Example](#example)

## What's new
* From version 1.4.0: code-template-generator will show a message when the new version is available on npmjs.com.
![Auto check update](./assets/autocheckupdate.jpg)

## Features
* It's simple to config what you want and install the dependencies you need.
* Supported:
    * Code splitting.
    * Image handling.
    * CSS, JS code injected automatic into HTML template.
    * .gitignore handling.
    * Hot Module Replacement (HMR) enabled for CSS.
* You don't need to care about the distribution (publish) directory.
* Automatic update check and show a message when the new version is available on npmjs.com.

## Screenshot
![How to use](./assets/code-template-generator.gif)

## Installation
Installed [Inquirer.js](https://www.npmjs.com/package/inquirer) is requirement before the code-template-generator installation:
* `$ npm i -g inquirer`

When you have already installed Inquirer.js:
* `$ npm i -g code-template-generator`

## Using
`$ generate <project-name> [option]`

| Argument | Requirement | Description |
|---|---|---|
| `<project-name>` | Required | Generate a project by a selected template |
| `git` | Option | A `.gitignore` file will be created automatically on the root of project directory |
|`-v`|Option|View the installed version|
|`-help`|Option|View the help information|

## Example
````
$ generate react-todo
$ generate react-counter git
$ generate -v
$ generate -help
````
