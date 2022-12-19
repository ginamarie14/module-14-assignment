const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);

  Post.findAll({
    attributes: ['id', 'title', 'date_created', 'postText'],
    include: [
      { model: Comment, attributes: ['id', 'comment_text', 'post_id', 'user_id', 'date_created'],
        include: { model: User, attributes: ['username', 'email'] }
      },
      { model: User, attributes: ['username', 'email'] }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  console.log('login');
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'title', 'date_created', 'postText'],
    include: [
      { model: Comment, attributes: ['id', 'comment_text', 'post_id', 'user_id', 'date_created'],
        include: { model: User, attributes: ['username', 'email'] }
      },
      { model: User, attributes: ['username', 'email'] }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'Post not found' });
        return;
      }
      const post = dbPostData.get({ plain: true });
      res.render('onePost', { post, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;