const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    date: String,
    location: String,
    description: String,
  });
  
const event = mongoose.model('event', eventSchema);

module.exports = event;