const db = require('../util/database');

module.exports = class Flight {
    constructor(id, code, status, departureTime, arrivalTime, departureCountry, arrivalCountry) {
        this.id = id;
        this.code = code;
        this.status = status;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.departureCountry = departureCountry;
        this.arrivalCountry = arrivalCountry;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM flight');
    }
}