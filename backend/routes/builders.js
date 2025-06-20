const express = require('express');
const router = express.Router();
const builders = require('../data/builders.json');

router.get('/', (req, res) => {
  res.json(builders);
});

router.get('/:id', (req, res) => {
  const builder = builders.find(b => b.id === parseInt(req.params.id));
  if (!builder) return res.status(404).send('Builder not found');
  res.json(builder);
});

module.exports = router;