const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'ewas-flights.cjtvci5q2dxw.eu-west-3.rds.amazonaws.com',
    user: 'admin',
    database: 'flights',
    password: 'aircraftandweather'
});

module.exports = pool.promise();
