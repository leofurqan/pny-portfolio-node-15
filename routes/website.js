const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/jwt")

//Models
const Website = require("../models/WebsiteModel");

router.get("/", async (req, res) => {
  try {
    const website = await Website.findOne().lean()
    console.log(website)
    res.render("home", { data: website })
  } catch (error) {
    res.send(`Error adding user: ${error}`);
  }
});

router.post("/addData", verifyToken, async(req, res) => {
  try {
    const website = new Website(req.body);
    await website.save()
    res.send("data inserted successfully...!!")
  } catch (error) {
    res.send(`Error adding user: ${error}`);
  }
})


module.exports = router