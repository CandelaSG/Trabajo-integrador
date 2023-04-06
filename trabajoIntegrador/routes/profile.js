const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/', profileController.show);
router.get('/edit', profileController.edit);
module.exports = router;