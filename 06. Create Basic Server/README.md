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

## 🌕 Break-down : Creating server step by step

### Http module is built-in core module to create ```http``` server
#### 1. import ```http``` module 
     const http = require('http');
> Simply imports built-in 'http' module
<br>

#### 2. ```http``` module has ```.createServer()``` method to create server
     http.createServer((req,res) => {
       res.write("Hello World");
       res.end();
     }).listen(4500);
 > Here we are creating server and we have callback arrow function which handles request (req) and result (res) <br>
 > res.write("Hello World") write data as response <br>
 > res.end() is called to explicitly end the response ( used as signal that response is completed ) <br>

#### 3. ```.listen(4500)``` creates local server at port 4500
> listen(4500) creates local server at port 4500 , which listens for incoming HTTP requests on port 4500 <br>

#### 4. You can use first class function to pass callback in ```.createServer()```

> Here we have 'data' which is a first class function <br>

       const data = (req,res) => {
            res.write("Hello World");
            res.end();
        }

> We pass 'data' as callback function in ```.createServer()```

       http.createServer(data).listen(4500);
