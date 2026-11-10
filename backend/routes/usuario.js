
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");

const router = express.Router();

// REGISTRO DE USUARIOS
router.post("/registro", async (req, res) => {
    try {
        const { nombre, correo, contraseña } = req.body;

        if (!nombre || !correo || !contraseña) {
            return res.status(400).json({
                mensaje: "Todos los campos son obligatorios"
            });
        }

        if (contraseña.length < 8) {
            return res.status(400).json({
                mensaje: "La contraseña debe tener al menos 8 caracteres"
            });
        }

        const usuarioExistente = await Usuario.findOne({
            correo: correo.trim().toLowerCase()
        });

        if (usuarioExistente) {
            return res.status(409).json({
                mensaje: "Este correo ya está registrado"
            });
        }

        const contraseñaHash = await bcrypt.hash(contraseña, 12);

        const nuevoUsuario = new Usuario({
            nombre,
            correo,
            contraseña: contraseñaHash
        });

        await nuevoUsuario.save();

        res.status(201).json({
            mensaje: "Usuario registrado correctamente",
            usuario: {
                id: nuevoUsuario._id,
                nombre: nuevoUsuario.nombre,
                correo: nuevoUsuario.correo
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al registrar el usuario"
        });
    }
});

// INICIO DE SESIÓN
router.post("/login", async (req, res) => {
    try {
        const { correo, contraseña } = req.body;

        if (!correo || !contraseña) {
            return res.status(400).json({
                mensaje: "Ingresa tu correo y contraseña"
            });
        }

        const usuario = await Usuario.findOne({
            correo: correo.trim().toLowerCase()
        });

        if (!usuario) {
            return res.status(401).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

        const contraseñaValida = await bcrypt.compare(
            contraseña,
            usuario.contraseña
        );

        if (!contraseñaValida) {
            return res.status(401).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

        const token = jwt.sign(
            { id: usuario._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            mensaje: "Inicio de sesión exitoso",
            token,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al iniciar sesión"
        });
    }
});

module.exports = router;
