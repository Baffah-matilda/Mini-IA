const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: { type: String, required: true },
  dateAndTime: { type: Date, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model('Encounter', encounterSchema);
