const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/', profileController.show);
router.get('/edit', profileController.edit);
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
// REGISTER
router.get('/register', profileController.register); 
router.post('/register', profileController.store); 

// LOGIN
router.get('/login', profileController.login);
router.post('/login', profileController.loginPost);

module.exports = router;