const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors({
  origin: '*', // Allow all origins (change this in production)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/api', (req, res) => {
  res.json({ message: 'CORS-enabled API!' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})