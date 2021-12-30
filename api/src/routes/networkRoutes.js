const express = require('express');

const router = express.Router();

const networkController = require('../controllers/networkController')

router.get('/', networkController.list);

router.post('/', networkController.post);

module.exports = router;