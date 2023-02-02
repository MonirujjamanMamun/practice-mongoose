const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const getDB = require('./utils/dbConnection');
const productRouter = require('./routers/v1/product.router');
const port = 5000;
const app = require('./index');

// database connection
getDB;

app.use('/api/v1/products', productRouter);

app.listen(port, () => {
  console.log(port, `Server is running ${port}`);
});
