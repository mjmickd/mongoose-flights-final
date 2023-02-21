const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const destinationSchema = new Schema({
    airport: {
        type: String,
        emum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date,
    },
}) 

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'LAX',
    },
    flightNo: {
        type: Number,
        min: 10, 
        max: 9999,
    },
    Date: {
        type: Number,
        default: function() {
            let today = new Date();
            return today.setFullYear(today.getFullYear() + 1)
        },
    },
    destinations: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema)