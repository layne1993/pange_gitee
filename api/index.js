const express = require("express")
const app = express()
app.use(express.static("../dist/index.html"))

module.exports = app
