var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var verificationSchema = new Schema({
    //last_verif_date: ,
    //verif_period: ,
    //next_verif_date: ,
    //left_until: ,
    //verif_cost: ,
    verif_location: String,
    verif_unit_code: String,
    verif_type: String,
    verif_metodology: String,
    verif_officer_name: String,
    conclusion: String,
    report_number: String, //Number
    mark_type: String,
    mark_number: String //Number
});

var Verification = mongoose.model('Verification', verificationSchema);

module.exports = Verification;