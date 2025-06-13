# ⭐ POST Request ( w/ Middleware )

<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/25556271-319c-4df7-bacf-d79ea585af5d", 
    width="700" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

<br>

## 🧩 You can send data from Client to Server
> #### We will send data from the client to server using POST request. The server will use <br> middleware that will handle the raw JSON data , parse it and we can use it.

<br>

## ❄️ How will we do it ?
#### 1. Let us use the old code structure ( use the Resources/origin.js )
#### 2. Follow below instructions

<br>

## 🌱 Let us create a middleware for handling POST request from Client
<br>

```js
// POST API handler for /API/Users

const postM = (req,res) => {
    let body = '';
    
    // Listening for data
    req.on('data' , (chunk) => {                               // each chunck added in body
        body += chunk.toString();                              // chunk converted to String before appending
    })

    // 'end' event to help update the API ( users array )
    req.on('end', () => {                                    // after request ends
        const newUser = JSON.parse(body);                    // create new user
        users.push(newUser);                                 // new user is pushed in users array
        res.statusCode = 201;
        res.write(JSON.stringify(newUser))
        res.end();
    })
}
```
<br>

## 💫 Things to know from above code !!
<br>

### ☁️ We are using Event Emitter : In this code, Request Event Emitter is used
#### 1. Event : 'data'

<br>

```js
req.on('data' , (chunk) => {
  body += chunk.toString();
})
```

> We used the ```req``` event emitter on the 'data' event <br>
> **Working** : Whenever our request body data from Client is received , our callback attached to event 'data' is triggered

<br>

#### 2. Event : 'end'
```js
req.on('end', () => { 
  const newUser = JSON.parse(body);
  users.push(newUser);
  res.statusCode = 201;
  res.write(JSON.stringify(newUser))
  res.end();
})
```

> We have another event emitter for ```req``` on 'end' event <br>
> **Working** : When our request body data is received from Client side ( req end ) , our callback attached to event 'end' is triggered

<br>

## 📑 How to send the request body data using POSTMAN ?
#### Step 1 : Enter the API url with POST method in POSTMAN ( Just enter the url don't send it )

<p align="left">
  <img 
    src="https://github.com/user-attachments/assets/4e241675-c2e5-4fc0-9948-aa6965583096", 
    width="900" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

<br>

#### Step 2 : Enter the Object you want to send as API ( here we will be sending user details )
- **Make sure are in this environment ( Body > raw )**

<p align="left">
  <img 
    src="https://github.com/user-attachments/assets/3beda604-9f77-4d04-8304-4bde0ef5b3fc", 
    width="900" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

<br>

- **Now you can enter the raw body data and send ( Object with user details )**

<p align="left">
  <img 
    src="https://github.com/user-attachments/assets/ee2467e2-bccd-4f1e-a97c-c60712c721ae", 
    width="900" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

<br>

#### Step 3 : Let's us check whether we have some changes in our API after send the client data

#### 🌗 BEFORE POST REQUEST
<p align="left">
  <img 
    src="https://github.com/user-attachments/assets/228e9335-3f56-4fdd-b2f0-084880ca1524", 
    width="500" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

#### 🌓 AFTER POST REQUEST
<p align="left">
  <img 
    src="https://github.com/user-attachments/assets/22dc8bc7-8ade-47e9-bc9f-3aa4d6b38303", 
    width="500" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>
