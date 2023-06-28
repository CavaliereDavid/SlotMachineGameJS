let coins = document.location.href.split('=')[1];

// this vector represents the current situation
let items = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

// each numbers represents a certain symbol
let lookupTableSymbol = [
  '&heartsuit;',
  '&diamondsuit;',
  '&spadesuit;',
  '&clubsuit;',
  '7',
  '&dollar;',
  '&star;',
  '&#9679;',
  '&#10163;',
];
// We define each color
let lookupTableColor = [
  'red',
  'red',
  'black',
  'black',
  'yellow',
  'green',
  'yellow',
  'blue',
  'black',
];

/**
 * Brief description of the function here.
 * @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
 * @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
 * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
 */
function drawSlotMachine() {
  let i, j;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      // We need to select the correct block from the DOM
      let itemQuery = document.getElementById('item-' + i + j);
      itemQuery.innerHTML = lookupTableSymbol[items[i][j]];
      itemQuery.style.color = lookupTableColor[items[i][j]];
    }
  }
}
/**
 * Brief description of the function here.
 * @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
 * @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
 * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
 */
function spin() {
  let i, j;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      // retrieves a random number between 0 and 8
      items[i][j] = Math.floor(Math.random() * 9);
    }
  }
  drawSlotMachine();
  award();
  let remainingCoins = document.getElementById('remaining-coins');
  remainingCoins.innerHTML = 'gettoni rimasti: ' + coins;
}

function award() {
  let message = document.getElementById('message');
  if (
    (items[0][0] == items[0][1] && items[0][1] == items[0][2]) ||
    (items[1][0] == items[1][1] && items[1][1] == items[1][2]) ||
    (items[2][0] == items[2][1] && items[2][1] == items[2][2]) ||
    (items[0][0] == items[1][0] && items[1][0] == items[2][0]) ||
    (items[1][0] == items[1][1] && items[1][1] == items[1][2]) ||
    (items[2][0] == items[2][1] && items[2][1] == items[2][2]) ||
    (items[0][0] == items[1][1] && items[1][1] == items[2][2]) ||
    (items[0][2] == items[1][1] && items[1][1] == items[2][0])
  ) {
    coins = coins * 2;
    if (coins < 100) {
      message.innerHTML = 'Complimenti, hai vinto!';
    }
    else {
      message.innerHTML =
        'Vincità massima, congratulazioni! Torna alla <a href="index.html">pagina principale</a>';
      document.querySelector('#spin').disabled = true;
    }
    
  } else {
    coins = coins - 1;
    if (coins > 0) {
      message.innerHTML = 'Riprova';
    } else {
      message.innerHTML =
        'Gettoni esauriti. Torna alla <a href="index.html">pagina principale</a>';
      document.querySelector('#spin').disabled = true;
    }
  }
}

/**
 * @todo aggiornare i punteggi e i gettoni rimasti
 * per html usare flex o grid
 * array di oggetti proprietà symbol e color
 * ogni colonna deve essere un array
 * realizzare un array di 3 elementi che man mano toglie il primo e ne aggiunge uno random in fondo
 * usare setInterval e la funzione clearInterval per interrompere il movimento
 * poi realizzare la funzione per la verifica della vincità
 */
