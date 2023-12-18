const express = require('express');
const router = express.Router();
const encounterController = require('../controllers/encounterController');

router.post('/encounters', encounterController.createEncounter);

module.exports = router;
