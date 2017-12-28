import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from './../components/Button';
import { onIncrement } from './../../state/counter/count.reducer';
// import { onIngredientsRequest } from './../../state/ingredients/ingredients.reducer';
import { getIngredients } from './../../state/ingredients/ingredients.reducer';
// import { onDecrement } from './../../state/counter/count.reducer';

// export const Counter: React.SFC<{}> = () => {
//   return (
//     <div>
//       <Button />
//     </div>
//   );
// };

// const pureSandwich = [1, 8, 10, 19, 26, 27];

// const getIngredients = () => 
//   fetch('http://localhost:4200/ingredients').then(response => response.json());

// const calculate = () => 
//   fetch('http://localhost:4200/sandwichgenerator', {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(pureSandwich)
//   }).then(response => response.json());

export const Counter = connect(
  null, 
  {
    onUp: onIncrement,
    onRequest: getIngredients
  },
)(({ onUp, onRequest }) => (
  <div>
    <Button onPress={onUp} value={'Go Up'} />
    <Button onPress={onRequest} value={'Get Ingredients'} />
  </div>
));

//     <Button onPress={calculate} value={'Calculate'} />