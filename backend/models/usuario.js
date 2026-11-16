
const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    contraseña: {
        type: String,
        required: true
    },
    cursosComprados:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Curso"
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model("Usuario", usuarioSchema);
