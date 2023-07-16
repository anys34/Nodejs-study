const Sequelize = require("sequelize");

class Spot_Info extends Sequelize.Model {
  static initiate(sequelize) {
    Spot_Info.init(
      {
        Spot: {
          type: Sequelize.INTEGER,
          unique: true,
        },
        Parking: {
          type: Sequelize.BOOLEAN,
          unique: true,
        },
        ParkingNum: {
          type: Sequelize.STRING(20),
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Spot_Info",
        tableName: "Spot_Info",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Spot_Info.hasOne(db.Car_Info, {
      foreignKey: "Spot",
    });

    db.Spot_Info.hasOne(db.Car_Info, {
      foreignKey: "Parking",
    });
  }
}

module.exports = Spot_Info;
