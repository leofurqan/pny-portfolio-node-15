const mongoose = require("mongoose");

const websiteSchema = mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: {type: String, required: true},
  facebook: {type: String, required: true},
  github: {type: String, required: true}
});

const websiteModel = mongoose.model('websites', websiteSchema)

module.exports = websiteModel
