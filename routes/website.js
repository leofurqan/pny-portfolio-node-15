const express = require("express");
const router = express.Router();

//Models
const Website = require("../models/WebsiteModel");

router.get("/", async (req, res) => {
    try {
      const website = await Website.findOne().lean()
      console.log(website)
      res.render("home", {data: website})
    } catch (error) {
      res.send(`Error adding user: ${error}`);
    }
  });
  

module.exports = router