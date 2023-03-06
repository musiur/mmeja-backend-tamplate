/**
 * author: musiur alam opu
 * title: main server
 * author site: https://musiur.vercel.app
 */

const express = require("express");
const ServerConfig = require("./configs/server.config");
const Database = require("./database/database");
const errorMiddleware = require("./middlewares/error.middleware");
const routes = require('./routes/routes');

// main app
const app = express();

// server configuations
const port = ServerConfig.port;

// Mount the router object on the root URL path
app.use('/', routes);

// Mount the middleware for handling global error
app.use(errorMiddleware);

// Start the server
app.listen(port, () => console.log(`Server running at port: ${port}`));
