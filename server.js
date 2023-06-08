/**
 * author: musiur alam opu
 * title: main server
 * author site: https://musiur.vercel.app
 */

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const ServerConfig = require("./configs/server.config")
const Database = require("./database/database")
const errorMiddleware = require("./middlewares/error.middleware")
const routes = require("./routes/routes")

// main app
const app = express()

// server configuations
const port = ServerConfig.port

// cross origin issue
const allowedOrigins = ["http://example1.com", "http://example2.com", "http://localhost:3000"]

app.use(
  cors({
    origin: allowedOrigins,
  })
)

// parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Mount the router object on the root URL path
app.use("/", routes)

// Mount the middleware for handling global error
app.use(errorMiddleware)

// Start the server
app.listen(port, () => console.log(`Server running at port: ${port}`))
