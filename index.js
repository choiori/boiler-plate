//벡엔드 서버 시작점
const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

//mongodb+srv://SM:<password>@mongodbtutorial.ryvfe.mongodb.net/test?retryWrites=true&w=majority
mongoose
  .connect(
    "mongodb+srv://SM:1906@mongodbtutorial.ryvfe.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
