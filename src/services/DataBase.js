const { Sequelize, DataTypes } = require("sequelize");
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

const Board = sequelize.define(
  "Board",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    thumbUrl: {
      type: DataTypes.STRING,
      // allowNull: false,
      // defaultValue: "linkToWhiteSheet?"
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Anonymous board",
    },
  },
  {
    timestamps: false,
  }
);

// sequelize.sync({ force: true });

// Board.create({ thumbUrl: "", title: "Alex's board" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("ERROR: ", err);
//   });

class DataBase {
  async getAllBoards() {
    return await Board.findAll();
  }
}

module.exports = new DataBase();
