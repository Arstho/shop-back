import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  ItemImage: {
    type: String,
    default: '',
  },
  ItemCount: {
    type: Number,
    default: 0,
  },
  ItemPrice: {
    type: Number,
    default: 0,
  },
  Total: {
    type: Number,
    default: 0,
  },
  Discount: {
    type: Number,
    default: 0,
  },
})

export default mongoose.model('Cart', CartSchema)
