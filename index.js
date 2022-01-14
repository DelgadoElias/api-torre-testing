const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config()

// Syncing all the models at once.
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

conn.sync({ force: true }).then(() => {
  server.listen(server_port, server_host, () => {
    console.log('%s listening at' + process.env.PORT)
  });
});
