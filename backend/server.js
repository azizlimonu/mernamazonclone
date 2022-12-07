require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const data = require('./data.js');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000'],
};

mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => { console.log('connected to mongoDB') })
  .catch((error) => console.log('connecting failed', error.message));

app.use(cors(corsOptions));

// test
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
// slug product
app.get('/api/product/slug/:slug', (req, res) => {
  const product = data.products.find(x => x.slug === req.params.slug);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

// id product
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(x => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" })
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});