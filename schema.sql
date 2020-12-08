DROP DATABASE IF EXISTS "PRODUCTS";

CREATE DATABASE "PRODUCTS";

DROP TABLE IF EXISTS "RELATED_PRODUCTS";
DROP TABLE IF EXISTS "PHOTOS";
DROP TABLE IF EXISTS "SKUS";
DROP TABLE IF EXISTS "STYLES";
DROP TABLE IF EXISTS "FEATURES";
DROP TABLE IF EXISTS "PRODUCTS_MAIN";

CREATE TABLE "PRODUCTS_MAIN" (
id integer NOT NULL PRIMARY KEY UNIQUE,
name VARCHAR,
slogan VARCHAR,
description TEXT,
category VARCHAR,
default_price integer
);

CREATE TABLE "FEATURES" (
id integer NOT NULL PRIMARY KEY UNIQUE,
product_id integer,
feature VARCHAR,
value VARCHAR,
FOREIGN KEY (product_id)
REFERENCES "PRODUCTS_MAIN"(id)
);

CREATE TABLE "STYLES" (
id integer NOT NULL PRIMARY KEY UNIQUE,
product_id integer,
name VARCHAR,
sale_price integer,
original_price integer,
default_style integer,
FOREIGN KEY(product_id)
REFERENCES "PRODUCTS_MAIN"(id)
);

CREATE TABLE "PHOTOS" (
id SERIAL NOT NULL PRIMARY KEY,
id_from_csv integer NOT NULL,
style_id integer,
FOREIGN KEY(style_id)
REFERENCES "STYLES"(id),
thumbnail_url VARCHAR,
url VARCHAR
);

CREATE TABLE "SKUS" (
id integer NOT NULL PRIMARY KEY UNIQUE,
style_id integer,
FOREIGN KEY(style_id)
REFERENCES "STYLES"(id),
size VARCHAR,
quantity integer
);

CREATE TABLE "RELATED_PRODUCTS" (
id integer NOT NULL PRIMARY KEY UNIQUE,
current_product_id integer,
related_product_id integer
);


COPY "PRODUCTS_MAIN"(id, name, slogan, description, category, default_price)
FROM '/Users/lucyarmstrong/Public/SDC_CSVs/product.csv'
DELIMITER ','
CSV HEADER;

COPY "FEATURES"(id, product_id, feature, value)
FROM '/Users/lucyarmstrong/Public/SDC_CSVs/features.csv'
DELIMITER ','
CSV HEADER;

COPY "STYLES"(id, product_id, name, sale_price, original_price, default_style)
FROM '/Users/lucyarmstrong/Public/SDC_CSVs/styles.csv'
DELIMITER ','
CSV HEADER
NULL AS 'null';

COPY "PHOTOS"(id_from_csv, style_id, thumbnail_url, url)
FROM '/Users/lucyarmstrong/Public/SDC_CSVs/photos.csv'
DELIMITER ','
CSV HEADER;

COPY "SKUS"(id, style_id, size, quantity)
FROM '/Users/lucyarmstrong/Public/SDC_CSVs/skus.csv'
DELIMITER ','
CSV HEADER;

COPY "RELATED_PRODUCTS"(id, current_product_id, related_product_id)
FROM '/Users/lucyarmstrong/Public/SDC_CSVs/related.csv'
DELIMITER ','
CSV HEADER;