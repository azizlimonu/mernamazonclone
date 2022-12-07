require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
// const data = require('./data.js');
const cors = require('cors');

const app = express();

// routes
const seedRouter = require('./routes/seedRoutes');
const productRouter = require('./routes/productRoutes');

const corsOptions = {
  origin: ['http://localhost:3000'],
};

mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => { console.log('connected to mongoDB') })
  .catch((error) => console.log('connecting failed', error.message));

app.use(cors(corsOptions));

app.use('/api/seed', seedRouter);
app.use('/api/products',productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});