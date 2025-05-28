# ⭐ Basic API Creation
<br>

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/04cf9b58-c808-43e8-b624-7c2f3f4a3b51",
    width="350" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>
<br>

1. We know how to build the server in Node.js so let's build a basic server
```js

(server.js)

import http from 'http';

const serve = http.createServer((req,res) => {


}).listen(8001);
```
<br>

2. Now write ```res.writeHead(200,{'Content-Type' : 'application/json'}); ``` - This line set-ups a response status code using ```writeHead``` method of ```res```(response) object

> - ```writeHead``` method takes two arguments , first argument is for status code you want to provide as response and <br> second argument is response header (in this case we are setting ```Content-Type``` to ```application-json/json```)
> - ```writeHead``` method is used to send the status code and headers to client
> - Here **200** status code is HTTP status code indicating the request was successful
> - ```Content-Type``` is to specify what media type to send in response body , the client can expect to recieve data in specific format
> - ```application/json``` is response body containing data in JSON format and we separate it with ```/``` to differentiate the type & sub-type respectively
<br>

3. Now write ```res.write(JSON.stringify({ Name:'Rohit' , Age:'101' }))``` - This line writes the response body using write method for ```res```(response) object

> - ```write``` method is used to send the response body to client with specific format the client is expecting
> - ```JSON.stringify``` is used to convert our Javascript object to JSON string
> - ```JSON.stringify``` takes a single argument where object is converted to JSON string
<br>

4. Final step to write ```res.end()``` - This line signals the end of response and sends it to client using ```end``` method of ```res```(response) object
   
> - The ```end``` method signals to our client that response body is completely sent.
> - Server then considers that our HTTP response is finished its work and no more data will be sent for that request
<br>

```js

(server.js)

import http from 'http';

const serve = http.createServer((req,res) => {

    res.writeHead(200 , {'Content-Type' : 'application/json'})
    res.write(JSON.stringify({ Name:'Rohit' , Age:'101' }))
    res.end()
}).listen(8001);
```
<br>

5. Now check your server using ```nodemon server.js``` at ```localhost:8001``` for this example
<br>

6. Browser will display
```json
{
    "Name": "Rohit",
    "Age": "101"
}
```
<br>

## 🍊 Status Codes
If I would've written 404 instead of 200 then it will show **Not Found Error** similarly if 500 then **Server Error**
Here are some of the status codes :

- 200 - OK
- 201 - Created
- 204 - No Content
- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 500 - Internal Server Error
- 503 - Service Unavailable

___You can learn more about status codes so visit W3 schools HttpMessages Section if needed___
