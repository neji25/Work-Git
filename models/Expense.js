var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var generalSchema = new Schema({
    title: String,
    typeSO: Number,
    classSO: String,
    scope: Number
});

module.exports = mongoose.model('General', generalSchema);
