var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var generalSchema = new Schema({
    title: String,
    type: String,
    class: String,
    measureKind: String,
    scope: String,
    location: String,
    status: String,
    comment: String,
    passport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Passport'
    },
    verification: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Verification'
    },
    repair: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Repair'
    }
});

module.exports = mongoose.model('General', generalSchema);
