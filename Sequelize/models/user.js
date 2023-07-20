const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        id: {
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
          type: Sequelize.STRING(50),
        },
        AccountNum: {
          type: Sequelize.STRING(50),
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

  static associate(db) {}
}

module.exports = User;
