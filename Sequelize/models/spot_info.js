const Sequelize = require("sequelize");

class Spot_Info extends Sequelize.Model {
  static initiate(sequelize) {
    Spot_Info.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        Spot: {
          type: Sequelize.STRING(20),
          unique: true,
        },
        Parking: {
          type: Sequelize.BOOLEAN,
        },
        ParkingNum: {
          type: Sequelize.STRING(50),
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
      sourceKey: "Spot"
    });
  }
}

module.exports = Spot_Info;
