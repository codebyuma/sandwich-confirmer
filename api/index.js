const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/ingredients', (req, res) => {
    fs.readFile('./data/ingredients/ingredients.json', 'utf8', (err, result) => {
        res.send(result);
    });
});

app.get('/ingredients/details', (req, res) => {
    fs.readFile('./data/ingredients/ingredientDetails.json', 'utf8', (err, result) => {
        res.send(result);
    });
});

app.listen(4200, () => console.log('Example app listening on port 4200!'));

