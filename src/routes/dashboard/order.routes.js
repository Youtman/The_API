'use strict';
const express = require('express');
const orderController = require('../../controllers/dashboard/order.controller');
const router = express.Router();

// Retrieve all orders
router.get('/orders', orderController.findAll);
// Create a new order
router.post('/orders', orderController.create);
// Retrieve a single order with id
router.get('/order/:id', orderController.findOne);
// Update a order with id
router.put('/order/:id', orderController.update);
// Delete a order with id
router.delete('/order/:id', orderController.delete);

module.exports = router;
