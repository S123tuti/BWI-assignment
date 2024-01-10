const express = require('express');
const { signup, login } = require('../controllers/authController');
const { auth } = require('../middlewares/authMiddleware');
const { createAdmin } = require('../controllers/adminController');
const { modifyUserDetails, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/create', createAdmin);
router.put('/update', auth, modifyUserDetails);
router.delete('/delete',auth, deleteUser )

module.exports = router;
