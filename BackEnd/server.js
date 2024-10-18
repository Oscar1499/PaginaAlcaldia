require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configuración del transporte SMTP
const transporter = nodemailer.createTransport({
    host: 'mail.alcaldialaunion.gob.sv',
    port: 465, // 465 si es SSL o 587
    secure: true, // true si es 465 false
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// ruta para manejar el envío del formulario
app.post('/contact', (req, res) => {
    const { nombre, email, mensaje } = req.body; // recibe los datos del formulario

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // donde recibiremos el mail
        subject: `Nuevo mensaje de contacto de ${nombre}`,
        text: `Tienes un nuevo mensaje de ${nombre} (${email}):\n\n${mensaje}`,
    };

    // enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar el correo:', error);
            return res.status(500).send('Error al enviar el correo.');
        }
        console.log('Correo enviado:', info.response);
        res.status(200).send('Correo enviado con éxito.');
    });
});

// iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
