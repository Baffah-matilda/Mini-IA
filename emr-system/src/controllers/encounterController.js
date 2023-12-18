const Encounter = require('../models/encounterModel');

exports.createEncounter = async (req, res) => {
  try {
    const encounter = new Encounter(req.body);
    await encounter.save();
    res.status(201).json(encounter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
