# ⭐ Let's learn Package.json

<p align="center">
  <img
    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHozeW95aWN5bmQyMDY3YXE2cGhxdGs5YnNld2Q4YTFteTltYnZ3aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a5viI92PAF89q/giphy.gif",
    width="300" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

<br>

## 🔰 What is Node Package Manager ?
> - __```npm```__ is Node Package Manager which is official package manager for Node.js. <br>
> - __Package Manager__ manages the external libraries / modules to - install , update , remove the libraries / modules

<br>

## 🌕 What is Package.json ?
> - __Package.json__ is heart of our Node.js project because it contains project related information (project metadata) like Project Name , Project Description , Project main entry point , dependencies , etc...
> - Which is managed by ```npm``` ( Node Package Manager )

<br>

## 🌕 Why should we create Package.json for our project ?
> - We create __Package.json__ provides you control over Node.js project structure , config , and dependency management.
> - If you want to re-create same project on different machine you can simply use package.json to install all required dependencies and setup the same project

<br>

## 🧩 Let's create our own package.json

<br>

1. Open terminal in your current project directory
2. Run the following cmd in the terminal to create a package.json file

```bash
npm init
```

<br>

3. Now you have to go through series of questions which will accordingly shape your project structure in future

```bash

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

package name: (00) first-package.json
version: (1.0.0)  
description: My first package.json
entry point: (index.js)
test command:
git repository:
keywords:  
author: Flux  
license: (ISC) MIT
```

<br>

4. After you answer those questions you get your package.json file in your project directory

```bash
{
  "name": "first-package.json",
  "version": "1.0.0",
  "description": "My first package.json",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Flux",
  "license": "MIT"
}
```

> - name : Name of our package.json file
> - version : Version of our package.json file
> - description : Desc of our package.json file
> - main : Entry point for our package.json file ( The file which will execute when we start/run project )
> - script : Script field of our package.json contains custom cmd to run our project ```npm run <script-name>```
> - author : Author of your project
> - liscense : liscense of your project 
