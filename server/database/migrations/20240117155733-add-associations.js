'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Users', 'User_roleId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model:'User_roles',
            key: 'id'
          },
          onUpdate:"CASCADE",
          onDelete:"RESTRICT"
        }, { transaction: t }),
        queryInterface.addColumn('Invoices', 'UserId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model:'Users',
            key: 'id'
          },
          onUpdate:"CASCADE",
          onDelete:"RESTRICT"
        }, { transaction: t }),
        queryInterface.addColumn('Invoice_items', 'InvoiceId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model:'Invoices',
            key: 'id'
          },
          onUpdate:"CASCADE",
          onDelete:"RESTRICT"
        }, { transaction: t }),
        queryInterface.addColumn('Invoice_items', 'ProductId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model:'Products',
            key: 'id'
          },
          onUpdate:"CASCADE",
          onDelete:"RESTRICT"
        }, { transaction: t }),
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'role_id', { transaction: t }),
        queryInterface.removeColumn('Invoices', 'user_id', { transaction: t }),
        queryInterface.removeColumn('Invoice_items', 'invoice_id', { transaction: t }),
        queryInterface.removeColumn('Invoice_items', 'product_id', { transaction: t }),
      ]);
    });
  }
};
