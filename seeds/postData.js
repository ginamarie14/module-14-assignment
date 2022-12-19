const { Post } = require('../models');

const postData = [
  {
    title: "How to replace your iPhone battery",
    postText: "We can now find a guide on how to replace our own iPhone batteries to avoid electronic waste. Remember, fix before you buy!",
    user_id: 1
  },
  {
    title: "Android Development",
    postText: "Find how the best approches to learning Android Development in 2022.",
    user_id: 2
  },
  {
    title: "Crypto no more?",
    postText: "Where crypto has been, and where it's going.",
    user_id: 3

  },
  {
    title: "Distributing Chromebooks in lower-income communities",
    postText: "Find out how focusing on access to technology can positively contribute to local development.",
    user_id: 4
  },
  {
    title: "Be a freelancer, or an LLC? Pros and Cons",
    postText: "There are pros and cons to either freelancing or being an LLC. Find out more about these two scenarios in this blog post.",
    user_id: 5
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;