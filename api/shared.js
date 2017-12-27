const fs = require('fs');

// use observables instead?
const getIngredients = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/ingredients/ingredients.json', 'utf8', (err, result) => {
            resolve(result);
        })
    });
};

const getIngredientDetails = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/ingredients/ingredientDetails.json', 'utf8', (err, result) => {
            resolve(result);
        })
    });
};

module.exports = {
    getIngredients,
    getIngredientDetails
};