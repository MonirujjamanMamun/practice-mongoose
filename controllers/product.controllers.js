const product = require('../models/productsModels');
const {
  createProductsServices,
  getProductServices,
  updateProductsServices,
} = require('../services/productServices');

const getProducts = async (req, res) => {
  try {
    const getProductLogig = await getProductServices();
    res.send(getProductLogig);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createProducts = async (req, res) => {
  try {
    const createProductLogig = await createProductsServices(req.body);
    res.send(createProductLogig);
  } catch (error) {
    res.status(400).send(error);
  }
};
const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const bodyData = req.body;
    const updatedData = await updateProductsServices(id, bodyData);
    res.send(updatedData);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = {
  getProducts,
  createProducts,
  updateProducts,
};
