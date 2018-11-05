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
        ref: 'passport'
    },
    verification: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'verification'
    }
});

module.exports = mongoose.model('General', generalSchema);
