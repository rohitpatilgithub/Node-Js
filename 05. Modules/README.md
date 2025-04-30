# ⭐ Modules in Node Js

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/afd503d6-3a5e-4dfb-bf2a-b0bbbd62373c",
    width="300" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

## 🌕 Core Modules
> __Core modules are built in modules that come along with Node js after installation of Node js , we have benefits like <br>__
> 1. Http module ```http``` to create HTTP server <br>
> 2. File system module ```fs``` to interact with file system ( reading , writing , deleting files ) <br>
> 3. Operating system module ```os``` provide information about OS ( CPU architecture , memory , etc... )

<br>

 ___These Modules can be used with ```require``` , which helps import the modules___

 <br>

<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/20f3902a-882b-4aea-92bb-b58a965f40a2",
    width="1000" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

 <br>

 ## 🌕 Global Modules <br>
__Global Modules inclueds built-in modules and globally installed CLI tools available system-wide__
>  1. Global CLI Modules : They are installed globally using ```npm install -g``` <br> They are used directly in terminal so no need to import

 <br>

  ex : ```nodemon```or ```tsc ( typescript )```
<br>

>  2. Built-in Modules : These come pre-installed with Node.js and importing is needed using ```.require()``` for CommonJs or  ```import``` for ES Modules

<br>

ex : ```fs``` for working with file system and ```path``` for working with file path

<br>

## 🌕 Non Global Modules  <br>
__Non Global Modules are those modules that are installed locally and can be accessed for that project itself ( which are no available at global level )__
> 1. Local NPM Packages : Modules installed locally using ```npm install``` which are stored in node_modules/ directory

<br>

ex : ```npm install express``` 

<br>

> 2. Custom Modules : Modules which you create in your project which can be ```js file``` or ```tsc file``` <br>

<br>

ex : 

```bash
(script.js)
export const studentName = 'Rohan';
export const studentId = 18;
```

```bash
(index.js)
import { studentName , studentId } from './script.js' // we are importing our modules
console.log(studentName + " : " + studentId);
```

#

<br>

### ⚠️ Whatever happens please place your import block of code at very top of file
### 💫 So always makesure you write those imports from line 1 itself
