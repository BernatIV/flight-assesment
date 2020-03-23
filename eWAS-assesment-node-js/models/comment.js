const db = require('../util/database');

module.exports = class Comment {
    constructor(description, tag, userId, flightId) {
        this.description = description;
        this.tag = tag;
        this.userId = userId;
        this.flightId = flightId;
    }

    static findById(id) {
        return db.execute('SELECT C.id, C.description, U.name, C.tag ' + 
                          'FROM comment C join user U ON C.user_id = U.id ' + 
                          'WHERE flight_id = ?', [id]);
    }

    save() {
        return db.execute(
            'INSERT INTO comment (description, tag, user_id, flight_id) VALUES (?, ?, ?, ?)',
            [this.description, this.tag, this.userId, this.flightId]
        );
    }
};