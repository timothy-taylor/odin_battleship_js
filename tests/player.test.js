import playerFactory from '../src/player.js';

let player;
let enemy;
const range = [[5,4],[5,5]];

beforeEach( () => {
  player = playerFactory();
  enemy = playerFactory();
});

test('attack => true when hit nothing', () => {
  expect(player.attack(enemy,range[0])).toStrictEqual([true,undefined]);
});

test('attack => true when hit successful', () => {
  enemy.getBoard().placeShip(range,range.length);
  expect(player.attack(enemy,range[0])).toStrictEqual([true,true]);
});

test('attack => false if coordinates have already been used', () => {
  enemy.getBoard().placeShip(range,range.length);
  player.attack(enemy,range[1]);
  expect(player.attack(enemy,range[1])).toStrictEqual([false,undefined]);
});

test('randAttack => does a legal/random attack', () => {
  expect(enemy.rndAttack(player)[0][0]).toBe(true);
});
