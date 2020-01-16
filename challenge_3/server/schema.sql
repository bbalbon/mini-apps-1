CREATE DATABASE orders;

USE orders;

CREATE TABLE details (
  name VARCHAR (20) NOT NULL,
  email VARCHAR (20) NOT NULL,
  password VARCHAR (20) NOT NULL,
  address VARCHAR (20) NOT NULL,
  city VARCHAR (20) NOT NULL,
  state VARCHAR (20) NOT NULL,
  zipcode VARCHAR (20) NOT NULL,
  creditcard VARCHAR (20) NOT NULL,
  expiry VARCHAR (20) NOT NULL,
  cvv VARCHAR (20) NOT NULL,
  billingzip VARCHAR (20) NOT NULL
)

-- mysql -u root < server/schema.sql