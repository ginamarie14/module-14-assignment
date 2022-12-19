const { Comment } = require('../models');
const sequelize = require('../config/connection');


const commentData = [
  {
    user_id: 1,
    post_id: 3,
    comment_text: "How lovely."
  },
  {
    user_id: 2,
    post_id: 3,
    comment_text: "What you did was great."
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: "Super interesting. Thanks."
  },
  {
    user_id: 4,
    post_id: 1,
    comment_text: "How exciting!"
  },
  {
    user_id: 5,
    post_id: 2,
    comment_text: "Wow, I learned a lot."
  },
  {
    user_id: 4,
    post_id: 2,
    comment_text: "Where can I learn more about this?"
  },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;