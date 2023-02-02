const mongoose = require('mongoose');
const getDB = mongoose
  .connect('mongodb://127.0.0.1:27017/products')
  .then(() => {
    console.log('Database is connect sucessfully.');
  });

module.exports = getDB;
