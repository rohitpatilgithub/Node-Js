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

___NOTE : If you're using Node.js (v20+) then it automatically detects usage of import / export  and won't throw any error___
___Thus don't rely on ESM auto detection___

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
