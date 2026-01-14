const express = require('express');
const { handleAuth } = require('../Middleware/authMiddleware');
const { handleRegister, handleLogin, getMe } = require('../Controllers/authControllers');

const router = express.Router();

router.post('/register', handleAuth, handleRegister);
router.post('/login', handleAuth, handleLogin);
router.get('/me', handleAuth, getMe);

module.exports = router;