console.log("Starting app");


const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");
const _ = require("lodash");
const yargs = require("yargs").argv;





// fs.appendFile("greetings.txt", 'Hello World', function (err) {
//     if (err) {
//         console.log("Unable to write");
//     }
//
// });

var command = yargs._[0];

if (command === "add") {
    console.log("Adding new note");
    notes.addNote(yargs.title, yargs.body);
}
if (command === "list") {
    notes.getAll();
} if (command === "remove") {
    notes.removeNote(yargs.title);
} if (command === "read") {
    notes.readNote(yargs.title);
}
else if (command === undefined) {
    console.log("Command not recognized");
}
