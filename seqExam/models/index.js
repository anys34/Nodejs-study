const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const Users = require("./users");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = Users;

Users.initiate(sequelize);

Users.associate(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
