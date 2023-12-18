const Patient = require('../models/patientModel');
const Encounter = require('../models/encounterModel');

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPatientDetails = async (req, res) => {
  try {
    const patientID = req.params.patientID;
    const patient = await Patient.findOne({ patientID });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const encounters = await Encounter.find({ patientID });
    res.status(200).json({ patient, encounters });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
