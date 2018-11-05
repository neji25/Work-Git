var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportSchema = new Schema({
    _device: {type: Schema.Types.ObjectId, ref: 'General'},
    maker: String,
    number: Number
});

var Passport = mongoose.model('Passport', passportSchema);