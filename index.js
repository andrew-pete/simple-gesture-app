const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/random', (req, res) => {
  const count = 5;

  // Return them as json
  res.json({random: Math.random()});

  console.log(`Sent ${count} passwords`);
});

  

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
