const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/', profileController.show);
router.get('/edit', profileController.edit);
// LOGIN
router.get('/login', profileController.login);

// REGISTER
router.get('/register', profileController.register); 
router.post('/register', profileController.store); 
module.exports = router;