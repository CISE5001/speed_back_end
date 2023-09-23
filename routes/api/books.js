// routes/api/topics.js

const express = require('express');
const router = express.Router();

// Load topic model
const Topic = require('../../models/topic');

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