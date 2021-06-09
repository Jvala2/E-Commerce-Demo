const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const mysql = require('mysql2');
// import sequelize connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ecommerce_db'
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  
});
});