require('dotenv').config();
const { Pool } = require('pg');

const marketPool = new Pool({
  host: process.env.MARKETHOST,
  database: process.env.MARKETDATABASE,
  user: process.env.MARKETUSER,
  password: process.env.MARKETPASSWORD,
  port: process.env.MARKETPORT || 5432,
  ssl: true
});

const query = (text, params) => {
  return marketPool.query(text, params);
};

module.exports = {
  query,
  marketPool,
};
