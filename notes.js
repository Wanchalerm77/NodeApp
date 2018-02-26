const fs = require("fs");
const _ = require("lodash");




var addNote = (title, body) => {
 var notesArr = getUnique();
 var note = {
     title,
     body
 };

 if (!includes(notesArr,note)) {
     notesArr.push(note);
     fs.writeFileSync("note-data.json", JSON.stringify(notesArr));
 }

 else {
     console.log("Note already stored");

 }


};

var includes = (arr, obj) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].title === obj.title) {
            return true;
        }
    }
}

var getAll = () => {
    var notes = getUnique();
    for (var i = 0; i < notes.length; i++) {
        console.log(notes[i]);
    }

};

var readNote = (title) => {
    var note = _.find(JSON.parse(fs.readFileSync("note-data.json")), ["title", title]);
    console.log(note);


};

var removeNote = (title) => {

};

var removeAll = () => {
  fs.writeFileSync("note-data.json", []);
};

var getUnique = () => {
    try {
        var x = JSON.parse(fs.readFileSync("note-data.json"));
    } catch (err) {
        console.log("error boiiii");
    }
  return _.uniqBy(x, "title");
};


module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote

};
