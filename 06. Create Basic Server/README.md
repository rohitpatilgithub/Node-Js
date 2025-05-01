# ⭐ Create Basic Server


<p align="center">
  <img
    src="https://github.com/user-attachments/assets/40fb276e-9f19-4db2-82e9-744cb862b930",
    width="300" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

<br>

## 🌕 To create server import ```http``` module by following ways
#### 1. ES Module import way which will require to change 'type:module' in 'package.json'
    import http from 'http';

#### 2. CommonJs Module import way which won't require any change any configuration
    const http = require('http');

## 🌕 Basic server setup
```
(server.js)
const http = require('http'); // importing 'http' module and assiging to const 'http'

http.createServer((req,res) => { // use createServer method
    res.write("Hello World");
    res.end();
}).listen(4500)
```
