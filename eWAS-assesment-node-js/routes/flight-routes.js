const express = require('express');
const controller = require('../controllers/flight-controller');
const router = express.Router();

router.post('/allFlights', controller.getAllFlights);

router.post('/commentsByFlightId', controller.getCommentsByFlightId);

router.post('/createComment', controller.createComment);

router.get('/', (req, res, next) => {
    res.send('<h4>Express js server is running</h4>');
});

// Anything else prompts this error message
router.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})

module.exports = router;
