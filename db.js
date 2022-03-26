const pg = require("pg");
const config = {
  host: "bk0hqc7dq1flwq4i2n6v-postgresql.services.clever-cloud.com",
  port: 5432,
  user: "uw8j9xywyopeonb9cwon",
  database: "bk0hqc7dq1flwq4i2n6v",
  password: "ZsM6RiKLmc7scgZFi2Nb",
};
const client = new pg.Client(config);
client.connect();
module.exports = client;
