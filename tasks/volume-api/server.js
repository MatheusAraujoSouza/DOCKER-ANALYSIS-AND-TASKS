const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;
const dataPath = './data/data.json';

// Add the body-parser middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    var data = JSON.parse(fs.readFileSync(__dirname + '/data/data.json', 'utf8'));
    res.send(data);
  });

app.post('/add', (req, res) => {
  var data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  console.log('Existing data:', data);
  if (!Array.isArray(data)) {
    console.log('Data is not an array, converting to empty array...');
    data = [];
  }
  var newEntry = { id: data.length + 1, name: req.body.name };
  data.push(newEntry);
  fs.writeFileSync(dataPath, JSON.stringify(data));
  res.send('Added ' + newEntry.name + ' to the list');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});