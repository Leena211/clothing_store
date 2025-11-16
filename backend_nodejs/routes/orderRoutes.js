const express = require('express');
const router = express.Router();

const {
  createOrder,
  getUserOrders,
  getOrder,
  updateOrderStatus,
  cancelOrder,
  trackOrder,
  getAllOrders,
} = require('../controllers/orderController');

const { protect, authorize } = require('../middleware/authMiddleware');

// User routes (require authentication)
router.post('/', protect, createOrder);
router.get('/', protect, getUserOrders);
router.get('/:id', protect, getOrder);
router.put('/:id/cancel', protect, cancelOrder);
router.get('/:id/track', protect, trackOrder);

// Admin routes (require admin authorization)
router.put('/:id/status', protect, authorize('admin'), updateOrderStatus);
router.get('/admin/all', protect, authorize('admin'), getAllOrders);

module.exports = router;
