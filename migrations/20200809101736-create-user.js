'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      admin: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
            allowNull: false,
            type: Sequelize.DATE
       },
      updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
       }
    },
        {
          timestamps: false
        });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};