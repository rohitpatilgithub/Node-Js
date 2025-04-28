# ⭐ First Node js script

<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/2a7af81d-8890-43b0-ac93-cb0883fe2f13" 
    width="300" 
    style="border-radius:10px; margin-top:20px; margin-bottom:20px;" 
  />
</p>

<br>

## 🌕 You remember what Node js is ?
> Right !! , Node js is server side code which can execute outside browser too. <br>
Thus we will try to execute few Basic Js commands which are executable outside browser

<br>

## **⭕ NOTE : Make sure you have Node js installed**

<br>

## 🌟 Before let's clear up somethings
| Javascript | Node Js |
|----------|----------|
| 'window' is global object here    | 'global' is global object here     |
| Environment is set in browser no need of external compiler | Needs Node to compile Js file outside browser |
| Window objects like DOM , EventLister can work    | Global objects like setTimeout , setInterval works <br> ( DOM , EventListener can't )|

<br>

## 📑 Fact : Both Node.js and Javascript are built on ECMAScript

<br>

# 🧩 "Hello World" in Node js

### Step 1. Open CMD / Windows Powershell type
```bash
node -v
```

```bash
v22.13.1 -> this will be your output ( Current Version of Node )
```

### Step 2. Setup the environment for Node js to compile
> We can simply type
> ```node```
> in our cmd and setup the environment <br>
> Node REPL ( Read-Eval-Print-Loop ) environment is combination of interpreter + executer

### Step 3. We know that we can run Js outside so let's try something
```bash
console.log("Hello World");
```

```
Output : 
Hello World
Undefined // Undefined because our command doesn't return anything ( console.log () doesn't return anything )
```

### Step 4. If we give return something and call it ?
```bash
function a(){
  return 10;
}
```

```bash
a();
```

```
Output :
10
```

## Note : Open Vscode and try on in-built vscode terminal
