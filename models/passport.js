var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportSchema = new Schema({
    serial_number: String, //Number
    passport_number: String,
    inventory_number: String,
    stock_number: String,
    maker: String,
    barcode: String, //Number
    initial_cost: String, //Number
    construction_date: String, //Date
    start_date: String, //Date
    change_data: String, //Date
    device: {
        type: Schema.Types.ObjectId,
        ref: 'General'
    }
});

var Passpot = mongoose.model('Passport', passportSchema);

module.exports = Passpot;