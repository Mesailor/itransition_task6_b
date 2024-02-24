const { Sequelize } = require("sequelize");
const config = require("config");

const { username, password, host, port } = config.get("Boards.dbConfig");

const sequelize = new Sequelize("paintboards", username, password, {
  host: host,
  port: port,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to DB successfully");
  })
  .catch((error) => {
    console.log("Unable to connect to DB: ", error);
  });

class DataBase {
  getAllBoards() {
    return [
      { id: Date.now(), thumbUrl: "", title: "Alex's board" },
      { id: Date.now() + 1, thumbUrl: "", title: "Peter's board" },
      { id: Date.now() + 2, thumbUrl: "", title: "Max's board" },
    ];
  }
}

module.exports = new DataBase();
