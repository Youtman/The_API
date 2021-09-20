const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
