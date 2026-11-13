const mongoose = require('mongoose');

const MensajeSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    edad: { type: Number, required: true },
    curso: { type: String, required: true },
    mensaje: { type: String, required: true },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mensaje', MensajeSchema);