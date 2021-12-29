import gameboardFactory from '../src/gameboard.js'

let board;
let testArray;
const RANGE = [[0,0],[0,1],[0,2]];

beforeEach( () => {
  board = gameboardFactory();
  testArray = 
    Array.from({length:10}, _ => Array.from({length:10}, _ => ({ id: null, hit: false })));
  testArray[0][0].id = 0;
  testArray[0][1].id = 0;
  testArray[0][2].id = 0;
  board.placeShip(RANGE,3);
});

test('placeShip() => create and assign shipID to the board', () => {
    expect(JSON.stringify(board.getArray())).toBe(JSON.stringify(testArray));
});

test('receiveAttack() => record a miss', () => {
  const coordinates = [4,3];
  testArray[coordinates[0]][coordinates[1]].hit = true;
  board.receiveAttack(coordinates);
  expect(JSON.stringify(board.getArray())).toBe(JSON.stringify(testArray));
});

test('receiveAttack => records a hit', () => {
  board.receiveAttack(RANGE[1]);
  testArray[0][1].hit = true;
  expect(JSON.stringify(board.getArray())).toBe(JSON.stringify(testArray));
});

test('isGameOver => true if all ships are sunk', () => {
  expect(board.isGameOver()).toBe(false);
});

test('isGameOver => true if all ships are sunk', () => {
  RANGE.forEach( c => board.receiveAttack(c) );
  expect(board.isGameOver()).toBe(true);
});
