# ⭐ Let's go through Nodemon Package

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/e0ccb909-9692-409a-8cde-faeef886af0f",
    width="300" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

## 🧩 What is Nodemon Package ?
> Nodemon package automatically restarts your Node.js server when changes are detected in project

## 🌕 Why we use it ?
> We have to restart the server by manually closing it down and restarting the server whenever changes are made in our project <br>
> Thus Nodemon has sole purpose of making things automated and restarting the server

## 🔰 How to install Nodemon in our project ?
1. Open terminal in your current directory

2. Run the cmd to install __Nodemon__
```bash
npm i -D nodemon 
```
here we added ```-D``` before nodemon because it is a devDependency

3. Now you will be able to see the nodemon in devDependencies of package.json
```bash

(package.json)

{
    "devDependencies": {
    "nodemon": "^3.1.10"
    }
}
```

4. After installation of nodemon package we should make sure that our ```scripts``` section in package.json is updated with our respective file
```bash

(package.json)

{
   "scripts": {
      "start": "node filename.js"
    }
}
```

## ⚠️ Why we wrote ```-D``` and why is it in devDependency not normal dependency ?
We wrote ```-D``` flag to explicitly add the nodemon in development dependency because it is not a package which is required during production but required during development which saves our time of restarting server during development
| Feature                      | `dependencies`                                                  | `devDependencies`                                                    |
| ---------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| Purpose                   | Packages **required to run** your application in **production** | Packages needed **only during development** (not used in production) |
| Included in `npm install` | ✅ Yes (always)                                                  | ✅ Yes (only if `NODE_ENV` ≠ "production")                            |
| Examples                  | `express`, `mongoose`, `axios`                                  | `nodemon`, `eslint`, `jest`, `typescript`                            |
| Used for                  | App functionality                                               | Development tools & testing                                          |
