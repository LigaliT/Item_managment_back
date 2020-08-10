'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.User,{foreignKey:'userId',onDelete:'cascade'});
    }
  };
  Item.init({
    name: DataTypes.STRING,
    availability: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};