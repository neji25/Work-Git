var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var verificationSchema = new Schema({
    last_verif_date: String, //Date
    verif_period: String, //Date
    next_verif_date: String, //Date
    left_until: String, //Date
    verif_cost: String, //Number
    verif_location: String,
    verif_unit_code: String,
    verif_type: String,
    verif_metodology: String,
    verif_officer_name: String,
    conclusion: String,
    report_number: String, //Number
    mark_type: String,
    mark_number: String, //Number
    device: {
        type: Schema.Types.ObjectId,
        ref: 'General'
    }
});

var Verification = mongoose.model('Verification', verificationSchema);

module.exports = Verification;