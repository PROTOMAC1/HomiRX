const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data);
// })

// const a = fs.readFileSync('file.txt')

// console.log(a.toString());

// fs.writeFile('file.txt', "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ()=>{
    //     console.log("written to this snoopdog double g");
    // })

const a = fs.writeFileSync('file.txt', "written to this snoopdog double g");

console.log(a);
console.log('hi bye');