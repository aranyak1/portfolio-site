const mongoose = require("mongoose");

const msgSchema = mongoose.Schema({
  name: String,
  email:String,
  message: String,
});

const Msg = mongoose.model('Msg',msgSchema);

module.exports = Msg; 