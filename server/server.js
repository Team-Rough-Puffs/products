const express = require('express');
const app = express();
const port = 3000;
const query = require('./queries.js');
const _ = require('underscore');
// FOR KIM/TOM REVIEW
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

const formatProdInfo = (responseRows, callback)=> {
  var featuresarray = _.map(responseRows, (proditem)=> {
    return {feature: proditem.feature, value: proditem.value};
  });
  var prodinfo = responseRows[0];
  delete prodinfo.feature;
  delete prodinfo.value;
  prodinfo.features = featuresarray;
  callback(prodinfo);
};

app.get('/products/:product_id', (req, res)=> {
  const prodId = req.params.product_id;
  query.getItemsForProduct(prodId, (err, response) => {
    if (err) {
      res.status(500).send('there was an internal error');
    } else {
      // add for each on rows property
      formatProdInfo(response.rows, (result) => {
        res.send(result);
      });
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