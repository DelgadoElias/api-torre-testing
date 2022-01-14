const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config()

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 5000, () => {
    console.log('%s listening at' + process.env.PORT)
  });
});
