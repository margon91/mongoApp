var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var libroSchema = new Schema({
	titulo: String,
	autor: String,
	editorial: String
});

module.exports = mongoose.model('Libro', libroSchema);

