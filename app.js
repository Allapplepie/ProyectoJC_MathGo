const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config(); 

const app = express();

app.use(express.json()); 
app.use(cors()); 
app.use(express.static('public')); 

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(' Conectado a MongoDB Atlas'))
    .catch((error) => console.error(' Error a MongoDB:', error));

app.get('/api/prueba', (req, res) => {
    res.json({ mensaje: "¡El servidor funciona!" });
});

const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
    console.log(` Servidor en: http://localhost:${PUERTO}`);
});