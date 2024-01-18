'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Invoice.belongsTo(models.User);
      Invoice.belongsToMany(models.Product,{through:'Invoice_items'})
    }
  }
  Invoice.init({
    total: DataTypes.DECIMAL,
    subtotal: DataTypes.DECIMAL,
    taxes: DataTypes.DECIMAL,
    invoice_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};