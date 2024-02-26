const express = require("express");
const cors = require("cors");
const dataBase = require("./services/DataBase");

const app = express();
const port = 3003;

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.get("/boards", async (req, res) => {
  try {
    // get boards from db
    let boards = await dataBase.getAllBoards();

    //send boards
    res.status(200).send(boards);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Sorry, something went wrong..." });
  }
});

app.post("/boards", async (req, res) => {
  try {
    const result = await dataBase.createBoard(req.body);
    res
      .status(200)
      .send({ result, message: "Board was created successfully!" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Something went wrong..." });
  }
});

app.listen(port, () => {
  console.log(`Listen on port ${port}...`);
});
