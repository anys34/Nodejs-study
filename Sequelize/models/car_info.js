const Sequelize = require("sequelize");

class Car_Info extends Sequelize.Model {
  static initiate(sequelize) {
    Car_Info.init(
      {
        Time: {
          type: Sequelize.INTEGER,
        },
        Money: {
          type: Sequelize.INTEGER,
        },
        EnterTime: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        ExitTime: {
          type: Sequelize.DATE,
        },
        CarNum: {
          type: Sequelize.STRING(50),
        },
        Spot: {
          type: Sequelize.STRING(20),
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
    db.Car_Info.belongsTo(db.Spot_Info, {
      foreignKey: "Spot",
      targetKey: "Spot",
    });
  }
}

module.exports = Car_Info;
