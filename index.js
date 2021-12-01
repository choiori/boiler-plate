//벡엔드 서버 시작점
const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser"); //req.body안에 들어있을 수 있게 하는 것
const { User } = require("./models/User");
const mongoose = require("mongoose");

const config = require("./config/key");
//application/x-www-form-urlencoded 로 된 데이터를 분석할 수 있게 가져옴
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 을 분석해서 가져올 수 있게 하는 것
app.use(bodyParser.json());

//mongodb+srv://SM:<password>@mongodbtutorial.ryvfe.mongodb.net/test?retryWrites=true&w=majority
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello, world! 졸프 화이팅!");
});

//회원 가입 할때 필요한 정보들을 client에서 가져오면
//그것들을 데이터 베이스에 넣어준다.
app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
