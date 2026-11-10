
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//ruta de usuarios
app.use("/api/usuarios",require("./routes/usuario"));

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido al backend de MathGo",
        estado: "Servidor funcionando correctamente"
    });
});

// Ruta de prueba
app.get("/api/estado", (req, res) => {
    res.json({
        mensaje: "La API de MathGo está activa"
    });
});

// Conexión con MongoDB
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB conectado correctamente");

        app.listen(PORT, () => {
            console.log(
                `Servidor MathGo ejecutándose en http://localhost:${PORT}`
            );
        });
    })
    .catch((error) => {
        console.error("Error al conectar con MongoDB:", error.message);
    });
