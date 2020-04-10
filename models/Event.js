const { model, Schema } = require('mongoose');

const EventSchema = new Schema({
	title: String,
	body: String,
	createdAt: String,
	finish: String,
	username: String   //¿NECESITO OBJETO USER?
});

module.exports = model('Event', EventSchema);

//Modelo que define la coleccion en base de datos MONGODB.