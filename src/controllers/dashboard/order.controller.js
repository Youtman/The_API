const Order = require('../../model/dashboard/order.model');

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  Order.find()
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Something went wrong while getting list of orders.',
      });
    });
};
// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({ message: 'Please fill all required fields' });
  }
  // Create a new User
  const order = new Order({
    Fname: req.body.Fname,
    Lname: req.body.Lname,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    totalAmount: req.body.totalAmount,
    meals: req.body.meals,
    mealsPerWeek: req.body.mealsPerWeek,
    title: req.body.item.title,
    quantity: req.body.item.quantity,
    servingPlan: req.body.servingPlan,
  });
  // Save user in the database
  order
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Something went wrong while creating new order.',
      });
    });
};
// Find a single User with a id
exports.findOne = (req, res) => {
  Order.findById(req.params.id)
    .then((order) => {
      if (!order) {
        return res
          .status(404)
          .send({ message: 'Order not found with id ' + req.params.id });
      }
      res.send(order);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({ message: 'Order not found with id ' + req.params.id });
      }
      return res
        .status(500)
        .send({ message: 'Error getting order with id ' + req.params.id });
    });
};
// Update a User identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({ message: 'Please fill all required fields' });
  }
  // Find user and update it with the request body
  Order.findByIdAndUpdate(
    req.params.id,
    {
      Fname: req.body.Fname,
      Lname: req.body.Lname,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      totalAmount: req.body.totalAmount,
      meals: req.body.meals,
      mealsPerWeek: req.body.mealsPerWeek,
      title: req.body.item.title,
      quantity: req.body.item.quantity,
      servingPlan: req.body.servingPlan,
    },
    { new: true }
  )
    .then((order) => {
      if (!order) {
        return res
          .status(404)
          .send({ message: 'order not found with id ' + req.params.id });
      }
      res.send(order);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({ message: 'order not found with id ' + req.params.id });
      }
      return res
        .status(500)
        .send({ message: 'Error updating order with id ' + req.params.id });
    });
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  Order.findByIdAndRemove(req.params.id)
    .then((order) => {
      if (!order) {
        return res
          .status(404)
          .send({ message: 'order not found with id ' + req.params.id });
      }
      res.send({ message: 'order deleted successfully!' });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res
          .status(404)
          .send({ message: 'order not found with id ' + req.params.id });
      }
      return res
        .status(500)
        .send({ message: 'Could not delete order with id ' + req.params.id });
    });
};
