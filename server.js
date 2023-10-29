const express = require("express");
require("dotenv").config();
require("./db/db")
const bodyParser = require("body-parser")
const authRoute = require('./routes/auth')

const app = express();
app.use(bodyParser.json())

//Routes
app.use('/auth', authRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});
