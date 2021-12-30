const express = require('express');

const router = express.Router();

const chainController = require('../controllers/chainController')

router.get('/', chainController.list);

router.get('/:id', chainController.get);

router.post('/', chainController.post);

module.exports = router;