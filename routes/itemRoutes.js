// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authenticate = require('../middlewares/authMiddleware');

// Item'ları listele (Kimlik doğrulaması gerekmiyor)
router.get('/', itemController.getItems);

// Yeni item ekle (Kimlik doğrulaması gerekiyor)
router.post('/', authenticate, itemController.createItem);

module.exports = router;
