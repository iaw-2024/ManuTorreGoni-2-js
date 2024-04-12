const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Middleware para permitir solicitudes CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para obtener los datos del listado
app.get('/api/elementos', async (req, res) => {
    try {
        // Hacer una solicitud a la API externa para obtener los datos de los elementos
        const response = await axios.get('https://66174e99ed6b8fa434825ed4.mockapi.io/api/datos/elementos');
        // Extraer los datos de la respuesta
        const datos = response.data;
        // Loguear los datos en la consola del servidor
        console.log(datos);
        // Enviar los datos obtenidos como respuesta al cliente en formato JSON
        res.json(datos);
    } catch (error) {
        // Capturar cualquier error que ocurra durante la solicitud
        console.error('Error al hacer la solicitud a la API externa:', error);
        // Enviar una respuesta de error al cliente
        res.status(500).json({ error: 'Error al obtener los datos de la API externa' });
    }
});

// Iniciar el servidor y hacer que escuche las solicitudes en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
