# ⭐ Basics you should know

<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/cc40abb2-0b1b-481b-b0bb-008c0934189a" 
    width="300" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

## 🌕 What is client side code ?
> __Client side code__ is use of HTML , CSS , Javascript to create web page which is rendered / executed on browser and its environment <br>
> We can't directly get access of database due to security reasons in Javascript
> __AJAX__ ( Asynchronous Javascript And XML ) is used to fetch data from server

## 🌕 Why AJAX ?
> __AJAX__ is used to talk to server ( no direct talk with actual database ) thus we send the request to server then the response ( copy of data ) <br>
is locally manipulated in-short we manipulate on the copy of data we received

## 🌕 How AJAX works ?
> ___AJAX => Talks to server
> Server => Talks to Database
> Front-End => Works with those copies of data received___

## 🌕 What is server side code ?
> __Server side code__ is use of Node.js , Express.js to help our Front-End communicate with Database.
It handles client __requests , process them , creates a response__ by interacting with database

## 🌕 Example of server side code ?
> Email sends the __request to server ( client to server ) , server checks the requests , validates the email id__ , <br> checks and __retrieves__ emails from database then __sends response back__ to requested emails


## 🌕 How client side code and server side code interaction with V8 looks like ?
![Node V8](https://github.com/user-attachments/assets/61982983-b462-4600-a7f4-ffc0e59b0ab2)
> - __V8 engine__ is designed to run on browser environment ( client side code to run on local system ) thus Javascript is primarily meant to run only inside the browser <br>
> - Thus , __Node.js__ creates a runtime env that helps Javascript to execute outside browser enabling server side execution !!!

## 🌕 Do you know ?
> ___1. We can create a personalized API using Node.js allows us to request data from server , server provides us data as response <br>
> 2. Request and Response are both done by API call___
