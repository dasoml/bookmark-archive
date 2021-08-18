const express = require("express");
const cors = require("cors");
const fs = require("fs");
const data = require("./data.json");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.json(data);
});

app.post("/add", (req, res) => {
  const newbookmark = {
    title: req.body.title,
    url: req.body.url,
  };

  data.push(newbookmark);
  data.forEach((v, i) => (v.id = i + 1));
  fs.writeFile("./data.json", JSON.stringify(data), () => {
    console.log("write data in data.json");
  });

  res.status(201);
  res.json(data);
});

app.post("/delete", (req, res) => {
  const checkData = data.filter((v) => v.id === req.body.id);

  if (checkData.length === 0) {
    res.status(500).send("해당하는 북마크 없음");
  } else {
    const newData = data.filter((v) => v.id !== req.body.id);
    fs.writeFile("./data.json", JSON.stringify(newData), () => {
      console.log("delete data in data.json");
    });
    res.status(201);
    res.json(newData);
  }
});

app.post("/edit", (req, res) => {
  const checkData = data.filter((v) => v.id === req.body.id);
  if (checkData.length === 0) {
    res.status(500).send("해당하는 북마크 없음");
  } else {
    let editData = data.filter((v) => v.id === req.body.id);
    res.status(201);
    res.json(editData);
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`run app at localhost:${port}`);
});
