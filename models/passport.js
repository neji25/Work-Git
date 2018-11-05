var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportSchema = new Schema({
    serial_number: Number,
    passport_number: String,
    inventory_number: String,
    stock_number: String,
    maker: String,
    barcode: Number,
    initial_cost: Number,
    construction_date: String,
    start_date: String,
    change_data: String
});

var Passpot = mongoose.model('Passport', passportSchema);

module.exports = Passpot;