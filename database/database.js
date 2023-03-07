// database.js

const mongoose = require("mongoose")
const DatabaseConfig = require("../configs/database.config")

const { uri } = DatabaseConfig

mongoose.connect(uri)

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected")
})

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`)
})

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected")
})

module.exports = mongoose.connection
