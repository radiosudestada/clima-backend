const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = '8fd554f29869aa0f8cd2633625a1cdb7';
const BALCARCE_ID = 3860448;

app.use(cors());

app.get('/clima', async (req, res) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${BALCARCE_ID}&units=metric&lang=es&appid=${API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener clima' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});