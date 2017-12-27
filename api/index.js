const express = require('express');
const fs = require('fs');
const app = express();
const shared = require('./shared');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/ingredients', (req, res) => {
   shared.getIngredients()
    .then((result) => res.send(result));
});

app.get('/ingredients/details', (req, res) => {
    shared.getIngredientDetails()
     .then((result) => res.send(result));
});

app.get('/rankings', (req, res) => {
    shared.getCharacteristicRankings()
     .then((result) => res.send(result));
});

app.listen(4200, () => console.log('Example app listening on port 4200!'));

