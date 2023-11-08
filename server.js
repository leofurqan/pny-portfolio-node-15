const express = require("express");
require("dotenv").config();
require("./db/db")
const path = require("path")
const exphb = require('express-handlebars')
const bodyParser = require("body-parser")
const authRoute = require('./routes/auth')
const websiteRoute = require("./routes/website")

const app = express();
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', exphb.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Routes
app.use('/auth', authRoute)
app.use('/', websiteRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});
