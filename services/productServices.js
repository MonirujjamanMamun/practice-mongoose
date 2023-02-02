const products = require('../models/productsModels');

const getProductServices = async () => {
  const data = await products.find({});
  return data;
};

const createProductsServices = async (data) => {
  const product = new products(data);
  const saveDb = await product.save();
  return saveDb;
};

const updateProductsServices = async (id, data) => {
  //   const getProduct = await products.updateOne(
  //     { _id: id },
  //     { $set: data },
  //     { runValidators: true }
  //   );
  const getProduct = await products.findById(id);
  getProduct.set(data).save();
  return getProduct;
};

module.exports = {
  getProductServices,
  createProductsServices,
  updateProductsServices,
};
