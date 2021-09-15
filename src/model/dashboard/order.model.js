const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  Fname: { type: String },
  Lname: { type: String },
  email: { type: String },
  address: { type: String },
  phone: { type: Number },
  order: {
    totalAmount: { type: Number },
    meals: [],
    mealsPerWeek: { type: Number },
    item: [
      {
        title: { type: String },
        quantity: { type: Number },
      },
    ],
    servingPlan: { type: String },
  },
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
