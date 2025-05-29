# ⭐ Simple Routing
<br>
<p align="center">
  <img
    src="https://github.com/user-attachments/assets/9d941be8-efb0-4cef-a48c-feac5e51bf83",
    width="400" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>
<br>

## 🛠️ What is routing ?
_Routing helps navigating of our website to different pages. <br>_
_We map our URLs with specific components so our user can move around._

<br>

## 🔖 Pre-requisites for routing in Node.js ?
#### 1. We will write basic server creation code
```js
(server.js)

import http from 'http'

const serve = http.createServer((req,res) => {


}).listen(p)
```
<br>

#### 2. Create ```.env``` file to store the environment variables like 
- Private API Keys
- URLs
- PORT No
- Tokens

```.env
(.env)

PORT = 8002
```
<br>

#### 3. Import ```PORT No``` from ```.env``` to your ```server.js``` and update scripts section in ```package.json```
- Update scripts section in ```package.json``` where we define our ```.env``` file
```json
"scripts": {
    "start": "node --env-file=.env server.js",
    "dev" : "nodemon --env-file=.env server.js"
  }
```
<br>

- Import ```PORT No``` in ```server.js```
- ```process``` is global object in Node.js that provides information and control over current Node.js process.
- Here we used ```process.env.PORT``` that provides information about ```PORT``` variable from ```.env``` file.
```js
const p = process.env.PORT; // Will try to access PORT variable from environment file
```
<br>

## 📒Routing in Node.js

#### 1. Let's use try catch method to write our logic for handling the request on server
- This is what our code will look
```js
(server.js)

import http from "http";
const p = process.env.PORT;

const serve = http
  .createServer((req, res) => {
    try {
      
    } catch (error) {

    }
  })

  .listen(p);
```
<br>

#### 2. Use ```conditionals``` to handle request for HTTP methods
- ```req.method``` will determine the HTTP methods like ```GET```,```PUT```,```PUSH```,etc.
- ```req.url``` will determine URL path created like ```'/'```,```'/about'```

```js
(server.js)

import http from "http";
const p = process.env.PORT; // Will try to access PORT variable from environment file

const serve = http
  .createServer((req, res) => {
    try {
      if (req.method === "GET") {            // If our HTTP method is 'GET'
        if (req.url === "/") {               // If our Url path is 'default'
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write("<h1>HomePage</h1>");
          res.end();
        } else if (req.url === "/about") {   // If our Url path is '/about'
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write("<h1>About</h1>");
          res.end();
        } else {                            // If our Url path is 'wrong'
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write("<h1>404 page not found</h1>");
          res.end();
        }
      }
      else{                               // If our HTTP method is 'not GET'
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("405 Method Not Allowed");
      }
    } catch (error) {                    // If our req has some error while handling the method and url
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  })
  .listen(p);

```
