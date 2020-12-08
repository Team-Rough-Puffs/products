const express = require('express');
const app = express();
const port = 3000;
const query = require('./queries.js');

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
  query.getProducts((err, response) => {
    if (err) {
      res.status(500).send('there was an internal error');
    } else {
      res.send(response);
    }
  });
});