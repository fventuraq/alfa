const express = require('express');

const router = express.Router();

const chainFileController = require('../controllers/chainFileController');

router.post('/', chainFileController.post);

module.exports = router;