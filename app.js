const mongoose = require("mongoose");
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 3000;

//Setup handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setup mongoose
mongoose.connect("mongodb://localhost/digimon", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

//importing routes directory (including index.js file)
app.use(require("./routes"));

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static("./public"));

//Setup port
app.listen(port, () => console.log(`server is listening on port ${port}`));

module.exports = app;
