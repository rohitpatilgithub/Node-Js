# ⭐ Basic Features ft. import / export

<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/7ded709d-09f4-4ca0-b331-a737aabfbb53",
    width="300" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

## 🌕 You can import & export elements from one js file to another js file

<br>

### 🔴 Bad practice

```bash
(index.js)
import { studentName , studentId } from './script.js'
console.log(studentName + " : " + studentId);
```

```bash
(script.js)
export const studentName = 'Rohan';
export const studentId = 18;
```

___📝 NOTE : If you're using Node.js (v20+) then it automatically detects usage of import / export  and won't throw any error___
___Thus don't rely on ESM auto detection___ <br> <br>
___⚠️ READ LAST SECTION___

<br>

### 🟢 Good Practice

```bash
(index.js)
const { name , age }  = require('./script');
console.log(`Student details are ${name} ${age}`)
```

```bash
(script.js)
const name = 'Rohit';
const age = 20;
module.exports = {
    name,
    age
};
```

<br>

### 🧩 We can also export functionssss

```bash
(index.js)
const { name , age , studentInfo }  = require('./script');
studentInfo();
```

```bash
(script.js)
const name = 'Rohit';
const age = 20;
const studentInfo = () => {
    return console.log(`Student details are ${name} ${age}`);
}
module.exports = {
    name,
    age,
    studentInfo
};
```

<br>

## 💫 Most importantly
### 1. We know that direct use of import / export is bad practice if we use it without explicit setting ```"type" : "module"```
### 2. At Good practice section there's no need of using ```package.json``` because CommonJs is by default helping us import / export
### 3. ```require()``` to import modules ( CommonJS )
### 4. ```module.exports``` to export modules ( CommonJS )

## ⌛ Later we'll see Package section in depth
