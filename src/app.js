const express = require("express");
const app = express();
const port = 3003;

app.use(express.json());

app.get("/boards", (req, res) => {
  try {
    // get boards from db
    let boards = [
      { id: Date.now(), thumbUrl: "", title: "Alex's board" },
      { id: Date.now() + 1, thumbUrl: "", title: "Peter's board" },
      { id: Date.now() + 2, thumbUrl: "", title: "Max's board" },
    ];

    //send boards
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.status(200).send(boards);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Sorry, something went wrong..." });
  }
});

app.listen(port, () => {
  console.log(`Listen on port ${port}...`);
});
