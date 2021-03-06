const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//app.use(require("./routes/api.js") )
app.use(require("./routes/view"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
