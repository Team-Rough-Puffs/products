const express = require('express');
const app = express();
const port = 3000;
const query = require('./queries.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, (err) => {
  console.log(`running server on port: ${port}`);
});

// create routes
app.get('/products', (req, res)=> {
  query.getProducts((err, response) => {
    if (err) {
      res.status(500).send('there was an internal error');
    } else {
      res.send(response);
    }
  });
});

app.get('/products/:product_id', (req, res)=> {
  const prodId = req.params.product_id;
  query.getItemsForProduct(prodId, (err, response) => {
    if (err) {
      res.status(500).send('there was an internal error');
    } else {
      // add for each on rows property
      res.send(response);
    }
  });
});

app.get('/products/:product_id/styles', (req, res)=> {
  query.getProductStyles((err, response) => {
    if (err) {
      res.status(500).send('there was an internal error');
    } else {
      res.send(response);
    }
  });
});

app.get('/products/:product_id/related', (req, res)=> {
  query.getRelatedProducts((err, response) => {
    if (err) {
      res.status(500).send('there was an internal error');
    } else {
      res.send(response);
    }
  });
});