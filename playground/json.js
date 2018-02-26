// var obj = {
//     name: "Non"
//
// };
//
// var st = JSON.stringify(obj);
//
// console.log(typeof st);
//
// console.log(st);
//
// var personString = '{"name": "Bob", "age": 25}';
//
// console.log(JSON.parse(personString));
// console.log( typeof JSON.parse(personString));
//

const fs = require("fs");

var oríginialNote = {
    title:"title",
    body: "body"
}

var noteString = JSON.stringify(oríginialNote);

fs.writeFileSync("note.json", noteString);

var nS = fs.readFileSync("note.json");

var note =JSON.parse(nS);

console.log(typeof note);
console.log(note.title);