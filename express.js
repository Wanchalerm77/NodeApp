const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const port = process.env.PORT || 3000;
var app = express();


hbs.registerPartials(__dirname + "/views/partials");
app.set("views", __dirname + `/views`);
app.set("view engine", "hbs");
hbs.registerHelper("getCurrentYear", () => {
    return new Date().getFullYear();
});


app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile("server.log",log + "\n", (err) =>{
        if (err) {
            console.log("Unable to connect");
        }
    });
    next();
});
app.get("/", (request, response) => {
    response.send("<h1>Hello fucker</h1>");
});


app.get("/about", (request, response) => {
    response.render("about.hbs", {});
});

app.listen(port, () => {
    console.log("Server started " + port);
});