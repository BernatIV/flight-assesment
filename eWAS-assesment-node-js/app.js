const express = require('express');
const bodyParser = require('body-parser');

const db = require('./util/database');

const app = express();
const port = 3000;

const flightRoutes = require('./routes/flight-routes');

// parse data that is sent in JSON, via request, from stream to JSON format
app.use(bodyParser.json());

// all requests get handled by this file
app.use(flightRoutes);

app.listen(port, () => console.log('Listening on port ' + port));
