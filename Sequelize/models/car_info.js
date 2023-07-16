const Sequelize = require("sequelize");

class Car_Info extends Sequelize.Model {
  static initiate(sequelize) {
    Car_Info.init(
      {
        Time: {
          type: Sequelize.STRING(50),
        },
        Money: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Car_Info",
        tableName: "Car_Info",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Car_Info.belongsTo(db.User, {
      foreignKey: "CarNum",
    });
    db.Car_Info.belongsTo(db.Spot_Info, {
      foreignKey: "Spot",
    });
    db.Car_Info.belongsTo(db.Spot_Info, {
      foreignKey: "Parking",
    });
  }
}

module.exports = Car_Info;
