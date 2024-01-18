'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoice_item.belongsTo(models.Invoice);
      Invoice_item.belongsTo(models.Product);
    }
  }
  Invoice_item.init({
    total_price: DataTypes.DECIMAL,
    unit_price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Invoice_item',
  });
  return Invoice_item;
};