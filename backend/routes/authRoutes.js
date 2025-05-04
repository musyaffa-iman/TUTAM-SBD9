const express = require('express');
const router = express.Router();
const { login, signup, logout } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);

module.exports = router;