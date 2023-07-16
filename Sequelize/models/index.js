const Sequelize = require("sequelize");
const User = require("./user");
const Spot_Info = require("./spot_info");
const Car_Info = require("./car_info");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.User = User;
db.Spot_Info = Spot_Info;
db.Car_Info = Car_Info;

User.initiate(sequelize);
Spot_Info.initiate(sequelize);
Car_Info.initiate(sequelize);

User.associate(db);
Spot_Info.associate(db);
Car_Info.associate(db);

module.exports = db;
