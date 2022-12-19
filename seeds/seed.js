const seedPosts = require('./postData');
const seedUsers = require('./userData');
const seedComments = require('./commentData');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Synched databse');

  await seedUsers();
  console.log('Seeded Users');

  await seedPosts();
  console.log('Seeded Posts');

  await seedComments();
  console.log('Seeded Comments');

  process.exit(0);
};

seedAll();