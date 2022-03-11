import express from 'express';
import Product from '../models/ProductModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const Products = await Product.find();
  res.send(Products);
});

productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

productRouter.get('/:_id', async (req, res) => {
  const product = await Product.findById(req.params._id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default productRouter;
