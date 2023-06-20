const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  genero: { type: String, required: true },
  time: { type: String, required: true },
});


module.exports = mongoose.model('Item', itemSchema);