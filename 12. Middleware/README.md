# ⭐ MIDDLEWARE

<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/a0283b7a-8cff-46c5-96d0-7e83966e21c9", 
    width="300" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

<br>

## 💎 What is Middleware ?
- Middleware is a function (or series of functions) that executes between the request and the response cycle in a server.
- We can also make changes to request or response object.

<br>

## ❄️ How to use Middleware ?
- Let us take a simple example where we will log the request url ```req.url``` and request method ```req.method```
```js
// Logger Middleware

const logM = (req,res,next) => { // important parameters
    console.log(`${req.url} ${req.method}`)
    next();  // next() is to notify server for moving to next middleware in the chain
}

const serve = http.createServer((req,res) => {
    logM(req,res,() => {
    // Will eventually log the request method and request url
}

serve.listen(8000);

```

<br>

### 🎯 Let us simplify our API by using middleware functions
#### Below I will be providing both codes where one is without using middleware and other is with middleware functions

<br>

```js
( Without Middleware )

import http from 'http';
const p = process.env.PORT;

const users = [
    {
        id:1,
        name:"Rohit",
        age:101
    },{
        id:2,
        name:"Rohan",
        age:50
    },{
        id:3,
        name:"Harsh",
        age:1
    }
]

const serve = http.createServer((req,res) => {
    res.setHeader('Content-Type','application/json');
    if(req.url === '/api/users' && req.method === 'GET'){
        res.statusCode = 200;
        res.write(JSON.stringify(users))
    }
    else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        res.statusCode = 200;
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id))
        if(user) {
            res.write(JSON.stringify(user))
        }
        else{
            res.statusCode = 404;
            res.write(JSON.stringify({ message : "User not found" }))
        }
    res.end();
    }
    else{
        res.writeHead(404 , {'Content-type' : 'text/html'});
        res.end('<h1>Error : Not found</h1>')
    }
})

serve.listen(p)
```

```js
( With Middleware )

import http from 'http';
const p = process.env.PORT;

// Logger Middleware
const logM = (req,res,next) => {
    console.log(`${req.url} ${req.method}`)
    next();
}

// json handler Middleware
const jsonM = (req,res,next) => {
    res.setHeader('Content-Type','application/json')
    next();
}

// Route Handler for Users
const reqM = (req,res) => {
    res.statusCode = 200;
    res.write(JSON.stringify(users))
    res.end();
}

// Route Handler for GET/API/users/:id
const idM = (req,res) => {
    const idIs = req.url.split('/')[3];
    const user = users.find((usr) => usr.id === parseInt(idIs))
    if(user) {
        res.statusCode = 200;
        res.write(JSON.stringify(user));
    }
    else{
        res.statusCode = 404;
        res.write(JSON.stringify({message : '404 : User not find'}));
        
    }
    res.end();
}

// Error handler Middleware
const errorM = (req,res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message : "Error"}))
    res.end();
}

const users = [
    {
        id:1,
        name:"Rohit"
    },
    {
        id:2,
        name:"Rohan"
    },{
        id:3,
        name:"Harsh"
    }
]

const serve = http.createServer((req,res) => {
    logM(req,res,() => {
        jsonM(req,res,()=> {
            if(req.url === '/api/users' && req.method === 'GET'){
                reqM(req,res);
            }
            else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                idM(req,res);
            }
            else{
                errorM(req,res);
            }
        })
    })
})

serve.listen(p)
```
