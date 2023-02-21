var express = require('express');
var router = express.Router();
const ticketsCtl = require('../controllers/tickets');

router.post('/flights/:id/tickets', ticketsCtl.create);


module.exports = router;