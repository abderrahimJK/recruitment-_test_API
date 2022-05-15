'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tags',
      [
        {
          type: 'tag1',
        },
        {
          type: 'tag2',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tags', null, {});
  }
};
