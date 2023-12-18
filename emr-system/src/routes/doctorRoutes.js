const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/patients', doctorController.getPatients);
router.get('/patients/:patientID', doctorController.getPatientDetails);

module.exports = router;
