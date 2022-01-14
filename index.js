const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config()

// Syncing all the models at once.
var server_host = process.env.YOUR_HOST || '0.0.0.0';

server.set('port', process.env.PORT || 8080);

conn.sync({ force: true }).then(() => {
  server.listen(server.get('port'), server_host, () => {
    console.log('%s listening at' + process.env.PORT)
  });
});
