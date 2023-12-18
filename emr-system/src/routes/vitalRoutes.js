const express = require('express');
const router = express.Router();
const vitalController = require('../controllers/vitalController');

router.post('/vitals', vitalController.submitVitals);

module.exports = router;
