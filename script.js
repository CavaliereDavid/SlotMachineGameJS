let coins = 10;
let score = 0;
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
  '&clubsuit',
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
      items[i][j] = Math.random() * 9;
    }
  }
  drawSlotMachine();
}
