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
    batch_number: {
      type:DataTypes.STRING,
      validate:{
        len:[3,255]
      },
      allowNull:false,
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[3,255]
      }
    },
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    entry_date: {
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};