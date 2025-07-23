const express = require('express');
const router = express.Router();

const { register, login, getUser, getMe } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/user/:id', authMiddleware, getUser);
router.get('/me', authMiddleware, getMe);

module.exports = router;
