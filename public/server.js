const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/elementos', async (req, res) => {
    try {
        const response = await axios.get('https://66174e99ed6b8fa434825ed4.mockapi.io/api/datos/elementos');
        const datos = response.data;
        console.log(datos);
        res.json(datos);
    } catch (error) {
        console.error('Error al hacer la solicitud a la API externa:', error);
        res.status(500).json({ error: 'Error al obtener los datos de la API externa' });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
