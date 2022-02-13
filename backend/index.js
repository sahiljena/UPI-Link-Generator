// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './.env' });

const express = require('express');

// get MongoDB driver connection
const dbo = require('./db/conn');

const PORT = process.env.PORT || 5000;
const app = express();


// Curb Cores Error by adding a header here
app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
   );
   res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
   );
   next();
});
app.use(express.json());
app.use(require('./routes/links'));



// Global error handling
app.use(function (err, _req, res) {
   console.error(err.stack);
   res.status(500).send('Something broke!');
});

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
   if (err) {
      console.error(err);
      process.exit();
   }

  // start the Express server
   app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
   });
});