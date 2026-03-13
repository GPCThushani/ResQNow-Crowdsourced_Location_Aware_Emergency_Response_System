const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/incidentController');
const { verifyToken } = require('../middleware/authMiddleware'); 

router.get('/', incidentController.getAllIncidents);

router.post('/', verifyToken, incidentController.createIncident);
router.put('/:id/status', verifyToken, incidentController.updateIncidentStatus);

module.exports = router;
