const jwt = require("jsonwebtoken")
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token']

    if(!token) {
        return res.status(403).send('Token required for authorization')
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) {
            return res.status(401).send("Invalid Token")
        } else {
            return next()
        }
    })
    
}

module.exports = verifyToken