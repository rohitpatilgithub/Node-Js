# ⭐ Simple API Creation in Node.js

<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/96725a21-ac26-446f-840c-59499fa5a043", 
    width="300" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

<br>

## 🔥 API Creation step-by-step
#### 1. Create basic object array that can be used as __Demo API__
- Demo API will be used to get user info

```js
import http from 'http';
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
```

<br>

#### 2. Create server using ' http ' and write simple logic using ' res.method ' and ' res.url '
- When user goes on url ```localhost:8000/api/users``` you must be able to access the data for http method ```GET```
```js
const serve = http.createServer((req,res) => {

    if(req.url === '/api/users' && req.method === 'GET'){

    // when our url is 'localhost:8000/api/users' and http method is 'GET'

    }
    else{

    }
})

serve.listen(8000)
```
<br>

#### 3. Write the logic for those conditionals
- Write the header and use JSON.stringify to convert our array objects in JSON from String
```js

const serve = http.createServer((req,res) => {

    if(req.url === '/api/users' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify(users))
        res.end();
    }
    else{
        res.writeHead(404, {'Content-Type':'application/json'});
        res.write(JSON.stringify({message : "Error"}))
        res.end();
    }
})

```
<br>

#### 4. Use POSTMAN or go on the URL to see the results

```json
[
    {
        "id": 1,
        "name": "Rohit"
    },
    {
        "id": 2,
        "name": "Rohan"
    },
    {
        "id": 3,
        "name": "Harsh"
    }
]
```
<br>

## 🎯 What if we want to get the particular user info using userID ?
- Write another condition statement that will take the url and extract the id
- Here we will consider matching a regular expression ```RegEx``` so we can catch the url with ```id```
- We will try to extract the ```id``` from url using ```split``` method
- Then , by using ```find``` method we will find the user and write the ```JSON```
```js
if(...) {...}

else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        const idIs = req.url.split('/')[3];
        const user = users.find((usr) => usr.id === parseInt(idIs))
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(user));
        res.end();
}

else {...}
```
<br>

- ___localhost:8000\api\users\2___

<br>

```json
{
  "id": 2,
  "name": "Rohan"
}
```
<br>

## 🌱 How does RegEx work here ?
```js
if(...) {...}

else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){ }

else {...}
```
- RegEx ( Regular Expression ) text written between two forward slashes
- Url is also a RegEx only thing is we will use it to extract the 'id' from url

| URL Part | RegEx Match | Explanation         |
| -------- | ----------- | ------------------- |
| `/`      | `\/`        | Escape slash        |
| `api`    | `api`       | Match text directly |
| `/`      | `\/`        | Escape slash        |
| `users`  | `users`     | Match text directly |
| `/`      | `\/`        | Escape slash        |
| `2`      | `([0-9]+)`  | Capture digits      |  

<br>
