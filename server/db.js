const Pool = require('pg').Pool;
const poll = new Pool({
  user: 'postgres',
  possword: "1988",
  host: 'localhost',
  port: 5432,
  database: "form_data"
});

module.exports = poll;