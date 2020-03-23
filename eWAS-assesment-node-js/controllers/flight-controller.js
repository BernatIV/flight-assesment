const Flight = require('../models/flight');
const Comment = require('../models/comment');

exports.getAllFlights = (req, res, next) => {
    Flight.fetchAll() 
        .then(result => {
            let flights = result[0];
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(flights));
        })
        .catch(err => console.log(err));
}

exports.getCommentsByFlightId = (req, res, next) => {
    Comment.findById(req.body.flight_id)
        .then(result => {
            let comments = result[0];
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(comments));
        })
        .catch(err => console.log(err));
}

exports.createComment = (req, res, next) => {
    const description = req.body.description;
    const tag = req.body.tag;
    const userId = req.body.userId;
    const flightId = req.body.flightId;

    const comment = new Comment(description, tag, userId, flightId);
    
    comment.save()
        .then(() => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(1));
        })
        .catch(err => console.log(err));
}
