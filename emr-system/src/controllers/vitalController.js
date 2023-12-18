const Vital = require('../models/vitalModel');

exports.submitVitals = async (req, res) => {
  try {
    const vital = new Vital(req.body);
    await vital.save();
    res.status(201).json(vital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
