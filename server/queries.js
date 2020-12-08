const pgConfig = require('./config.js');
const { Client } = require('pg');
const client = new Client(pgConfig.config);

client.connect(err => {
  if (err) {
    console.error('connection error', err);
  } else {
    console.log('succesfully connected to database');
  }
});

// query functions here // example
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


const getProductsForProduct = (callback)=> {
  client.query('Insert query string', (err, res) => {
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

// const databaseConfig = {
//   'host': 'localhost',
//   'port': 5432,
//   'database': 'PRODUCTS',
//   'user': 'postgres',
//   'password': 'bunniegirl14#'
// };

// const pgp = require('pg-promise')({});
// // how to use callback with console log statement to indicate connection succesful
// // how do I know that nodemon is working
// const db = pgp(databaseConfig);

module.exports = {
  getProducts, getProductsForProduct, getProductStyles, getRelatedProducts
};