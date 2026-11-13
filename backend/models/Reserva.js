const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    curso: { type: String, default: "Curso MathGo" }, // Opcional: para saber de qué curso es
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reserva', ReservaSchema);