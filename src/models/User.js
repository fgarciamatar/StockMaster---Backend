const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      e_mail: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        //allowNull: false,
      },

    },
    { timestamps: false }
    );
  };
  