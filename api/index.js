const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', function (req, res) {
    fs.readFile('./data/ingredients/ingredients.json', (err, result) => {
        res.send(result);
    });
});

app.listen(4200, function () {
  console.log('Example app listening on port 4200!');
});

