// NOT RECOMMENDED ( Bad Practice )
// This works because Node(v20+) automatically detects usage of import / export
// export const name = 'Rohit';
// export const age = 20;
// export function studentInfo(){
//     return console.log(`Student details are ${name , age}`)
// }

// RECOMMENDED ( Good Practice )
const name = 'Rohit';
const age = 20;
const studentInfo = () => {
    return console.log(`Student details are ${name , age}`);
}
module.exports = {
    name,
    age,
    studentInfo
};
