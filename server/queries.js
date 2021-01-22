const pgConfig = require('./config.js');
const { Client } = require('pg');
const client = new Client(pgConfig);

// connect server to database
client.connect(err => {
  if (err) {
    console.error('connection error', err);
  } else {
    console.log('succesfully connected to database');
  }
});

// query functions here
const getProducts = (callback)=> {
  client.query('Insert query string', (err, res) => {
    if (err) {
      callback(err);
      return;
    } else {
      callback(null, res);
    }
  });
};

const getItemsForProduct = (prodID, callback)=> {
  client.query(`SELECT "PRODUCTS_MAIN".id, "PRODUCTS_MAIN".name, "PRODUCTS_MAIN".slogan, "PRODUCTS_MAIN".description, "PRODUCTS_MAIN".category, "PRODUCTS_MAIN".default_price, "FEATURES".feature, "FEATURES".value FROM "PRODUCTS_MAIN" INNER JOIN "FEATURES" ON "PRODUCTS_MAIN".id="FEATURES".product_id WHERE "PRODUCTS_MAIN".id = ${prodID}`, (err, res) => {
    if (err) {
      callback(err);
      return;
    } else {
      callback(null, res);
    }
  });
};

const getProductStyles = (callback)=> {
  client.query('Insert query string', (err, res) => {

    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const getRelatedProducts = ()=> {
  client.query('Insert query string', (err, res) => {

    if (err) {
      callback(err);
    } else {
      callback(null, err);
    }
  });
};

module.exports = {
  getProducts, getItemsForProduct, getProductStyles, getRelatedProducts
};