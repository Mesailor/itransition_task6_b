const express = require("express");
const app = express();
const port = 3003;

app.use(express.json());

app.get("/boards", (req, res) => {
  try {
    // get boards from db
    let boards = [
      { thumbUrl: "", title: "Alex's board" },
      { thumbUrl: "", title: "Peter's board" },
      { thumbUrl: "", title: "Max's board" },
    ];

    //send boards
    res.status(200).send(boards);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Sorry, something went wrong..." });
  }
});

app.listen(port, () => {
  console.log(`Listen on port ${port}...`);
});
