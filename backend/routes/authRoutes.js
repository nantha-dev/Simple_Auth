const express = require('express');
const router = express.Router();
const { registerUser, loginUser,DeleteUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/delete-user', DeleteUser);

module.exports = router;