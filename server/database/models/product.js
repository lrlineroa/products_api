'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Invoice,{through:'Invoice_items'})
    }
  }
  Product.init({
    batch_number: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    entry_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};