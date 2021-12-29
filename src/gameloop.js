import playerFactory from './player.js';

const rangeFinder = (start, end, length = end - start + 1) =>
        Array.from({ length }, (_, i) => start + i);

//
// create two players
// locate ships for each player
// loop 1
// [ create a ship pool, that the player chooses from
// once that ship is put on the board remove it from the pool
// do until the pool is empty ]
// loop 2
// [ player1 chooses a spot to fire on
// hit or miss, etc
// player2 choose a sport to fire on
// hit or miss, etc
// until all ships are sunk ]
//
export default function() {
  const player = playerFactory();
  const enemy = playerFactory();
  const enemyBoard = enemy.getBoard();
  const playerBoard = player.getBoard();

  const arr = [
    rangeFinder(1,5).map(x => [0,x]),
    rangeFinder(7,8).map(x => [0,x]),
    rangeFinder(3,6).map(x => [1,x]),
    rangeFinder(7,8).map(x => [1,x]),
    rangeFinder(2,5).map(x => [2,x]),
    rangeFinder(6,7).map(x => [2,x]),
    rangeFinder(7,9).map(x => [3,x]),
    rangeFinder(4,5).map(x => [3,x]),
    rangeFinder(0,2).map(x => [4,x]),
    rangeFinder(3,4).map(x => [4,x]),
    rangeFinder(4,6).map(x => [5,x]),
    rangeFinder(1,3).map(x => [5,x]),
    rangeFinder(2,4).map(x => [6,x]),
    rangeFinder(6,8).map(x => [6,x]),
    rangeFinder(2,4).map(x => [7,x])
  ];
  
  arr.forEach(range => enemyBoard.placeShip(range, range.length));

  const arr2 = [
    rangeFinder(0,4).map(x => [8,x]),
    rangeFinder(5,6).map(x => [0,x]),
    rangeFinder(3,6).map(x => [1,x]),
    rangeFinder(8,9).map(x => [7,x]),
    rangeFinder(0,3).map(x => [2,x]),
    rangeFinder(7,8).map(x => [2,x]),
    rangeFinder(6,8).map(x => [3,x]),
    rangeFinder(2,3).map(x => [3,x]),
    rangeFinder(2,4).map(x => [4,x]),
    rangeFinder(6,7).map(x => [4,x]),
    rangeFinder(8,9).map(x => [5,x]),
    rangeFinder(1,3).map(x => [9,x]),
    rangeFinder(2,4).map(x => [6,x]),
    rangeFinder(6,8).map(x => [8,x]),
    rangeFinder(2,4).map(x => [7,x])
  ];

  arr2.forEach(range => playerBoard.placeShip(range, range.length));

  return [player,enemy];
}
