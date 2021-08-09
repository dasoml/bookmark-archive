const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json({ extended: false }));

const bookmarks = [
  { title: "네이버", url: "naver.com", id: 1 },
  { title: "다음", url: "daum.net", id: 2 },
  { title: "카카오", url: "kakao.net", id: 3 },
];

app.get("/", (req, res) => {
  res.status(200);
  res.json(bookmarks);
});

app.post("/", (req, res) => {
  const newbookmark = {
    title: req.body.title,
    url: req.body.url,
    id: req.body.id,
  };

  bookmarks.push(newbookmark);
  res.status(201);
  res.json(bookmarks);
});

const port = 3001;
app.listen(port, () => {
  console.log(`run app at localhost:${port}`);
});
