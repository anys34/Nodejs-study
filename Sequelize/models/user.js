const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        Id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        UserName: {
            type: Sequelize.STRING(50),
        },
        Password: {
          type: Sequelize.STRING(255),
        },
        CarNum: {
          type: Sequelize.STRING(20),
          unique: true,
        },
        Enter: {
          type: Sequelize.BOOLEAN,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "User",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasOne(db.Car_Info, {
        foreignKey: "CarNum"
      });
  }
}

module.exports = User;
