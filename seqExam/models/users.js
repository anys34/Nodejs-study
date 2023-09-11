const Sequelize = require("sequelize");

class Users extends Sequelize.Model {
  static initiate(sequelize) {
    Users.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(50)
        }
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Users",
        tableName: "Users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {}
}

module.exports = Users;
