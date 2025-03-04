const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

const allowedOrigins = ["http://localhost"]

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      console.log('Origin not allowed by CORS:', origin)
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200,
  credentials: true
}

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ message: 'CORS-enabled API!' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})