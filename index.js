const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

const app = express();

const username = "Vishwjeet_Singh";
const password = "ETpy36pHRHjshO2v";

app.use(express.json());

mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.bzfe6kk.mongodb.net/Application?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(userRoutes);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
