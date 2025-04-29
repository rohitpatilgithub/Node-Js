// NOT RECOMMENDED ( Bad Practice )
// This works because Node(v20+) automatically detects usage of import / export
// import { name , age , studentInfo } from './script.js';
// console.log(`Student name is ${name}`)
// console.log(`Student age is ${age}`)
// studentInfo();

// RECOMMENDED ( Good Practice )
const { name , age ,studentInfo }  = require('./script');
console.log(`Student name is ${name}`)
console.log(`Student age is ${age}`)
studentInfo();
