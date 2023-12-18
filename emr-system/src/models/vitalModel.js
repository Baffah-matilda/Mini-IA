const mongoose = require('mongoose');

const vitalSchema = new mongoose.Schema({
  patientID: { type: String, required: true },
  bloodPressure: { type: String, required: true },
  temperature: { type: String, required: true },
  pulse: { type: String, required: true },
  spO2: { type: String, required: true },
});

module.exports = mongoose.model('Vital', vitalSchema);
