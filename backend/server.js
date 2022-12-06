const express =require("express");
const data =require('./data.js')
const cors= require('cors');

const app = express();

const corsOptions = {
  origin : ['http://localhost:3000'],
};

app.use(cors(corsOptions));

// test
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});