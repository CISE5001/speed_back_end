// routes/api/topics.js

const express = require('express');
const router = express.Router();

// Load topic model
const Topic = require('../../models/topic');
const submittedArticles = require('../../models/submittedArticles');
const approvedArticles = require('../../models/approvedArticles');

// @route GET api/topics/test
// @description tests topics route
// @access Public
router.get('/test', (req, res) => res.send('topic route testing!'));

// @route GET api/topics
// @description Get all topics
// @access Public
router.get('/', (req, res) => {
  Topic.find()
    .then(topics => res.json({topics}))
    .catch(err => res.status(404).json({ notopicsfound: 'No topics found' }));
});

//GET submitted articles for moderator page.
router.get('/submittedArticles', (req, res) => {
  submittedArticles.find()
    .then(submittedArticles => res.json({submittedArticles}))
    .catch(err => res.status(404).json({ noarticlesfound: 'No articles found' }));
});

//GET approved articles for moderator page.
router.get('/approvedArticles', (req, res) => {
  approvedArticles.find()
    .then(approvedArticles => res.json({approvedArticles}))
    .catch(err => res.status(404).json({ noarticlesfound: 'No articles found' }));
});

// @route GET api/topics/:id
// @description Get single topic by id
// @access Public
router.get('/:id', (req, res) => {
  Topic.findById(req.params.id)
    .then(topic => res.json(topic))
    .catch(err => res.status(404).json({ notopicfound: 'No topic found' }));
});

// @route GET api/topics
// @description add/save topic
// @access Public
router.post('/', (req, res) => {
  Topic.create(req.body)
    .then(topic => res.json({ msg: 'topic added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this topic' }));
});

//POST for submitted articles from user page
router.post('/submittedArticles', (req, res) => {
  submittedArticles.create(req.body)
    .then(submittedArticles => res.json({ msg: 'article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

//POST for arrpoved articles from user page
router.post('/approvedArticles', (req, res) => {
  approvedArticles.create(req.body)
    .then(approvedArticles => res.json({ msg: 'article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route GET api/topics/:id
// @description Update topic
// @access Public
router.put('/:id', (req, res) => {
  Topic.findByIdAndUpdate(req.params.id, req.body)
    .then(topic => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/topics/:id
// @description Delete topic by id
// @access Public
router.delete('/:id', (req, res) => {
  Topic.findByIdAndRemove(req.params.id, req.body)
    .then(topic => res.json({ mgs: 'topic entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a topic' }));
});

module.exports = router;