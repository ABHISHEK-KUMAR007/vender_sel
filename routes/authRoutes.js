const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const { protect, authorize } = require('../middleware/auth');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// Protected routes example
router.get('/vendor/dashboard', 
  protect, 
  authorize('vendor'), 
  (req, res) => {
    res.json({ message: 'Vendor dashboard' });
});

router.get('/miner/dashboard', 
  protect, 
  authorize('miner'), 
  (req, res) => {
    res.json({ message: 'Miner dashboard' });
});

module.exports = router;