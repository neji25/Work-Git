var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var repairSchema = new Schema({
    reason_for_repair: String,
    // repair_date: ,
    repair_address: String,
    repair_cost: String, //Number
    short_description: String,
    device: {
        type: Schema.Types.ObjectId,
        ref: 'General'
    }
});

var Repair = mongoose.model('Repair', repairSchema);

module.exports = Repair;