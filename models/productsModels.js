const mongoose = require('mongoose');

const productScema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, 'At lest 3 charecter needed.'],
      maxLength: [20, 'To log'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    unit: {
      type: String,
      required: true,
      enum: ['kg', 'litter', 'pices'],
    },
    quntity: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
        message: 'Quntity must be an Integer',
      },
    },
    status: {
      type: String,
      required: true,
      enum: ['In-stock', 'Stock-out', 'Not-excist'],
    },
    // suplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'supplier',
    // },
    // categorise: {
    //   name: {
    //     type: String,
    //     required: true,
    //   },
    //   _id: mongoose.Schema.Types.ObjectId,
    // },
  },
  { timestamps: true }
);

const product = mongoose.model('product', productScema);

module.exports = product;
