const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

//router.get('/', profileController.show);
router.get('/id/:id', profileController.show);

// REGISTER
router.get('/register', profileController.register); 
router.post('/register', profileController.store); 

// LOGIN
router.get('/login', profileController.login);
router.post('/login', profileController.loginPost);
//EDIT
router.get('/edit', profileController.edit);
router.post('/edit', profileController.editPost);
//LOGOUT
router.post('/logout', profileController.logout);
module.exports = router;