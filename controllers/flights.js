const Flight = require("../models/flight");
const Ticket = require("../models/ticket");


module.exports = {
    index,
    show,
    create,
    new: newFlight
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All Flights', flights });
    });
  }

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render("flights/show", {title: "Flight Details", flight, tickets})
    });
  });
}

function create(req, res) {
  for(let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
  };
  Flight.create(req.body, (err) => {
    if(err) return res.render('flights/new')
    res.redirect('/flights')
  })
}


function newFlight(req, res) {
    res.render('flights/new');
}
