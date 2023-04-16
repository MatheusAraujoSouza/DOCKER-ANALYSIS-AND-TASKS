const express = require('express');
const app = express();
const axios = require('axios');
const port = 4000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://app1:3000');
    res.send(`Response from app1: ${response.data}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error communicating with app1');
  }
});

app.listen(port, () => {
  console.log(`app2 listening at http://localhost:${port}`);
});