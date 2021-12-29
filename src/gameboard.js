import shipFactory from "../src/ship.js";

const gameboardFactory = () => {
  //
  // private instance variables
  const board = Array.from({ length: 10 }, (_) =>
    Array.from({ length: 10 }, (_) => ({ id: null, hit: false }))
  );
  const shipList = [];
  let pieceID = 0;

  //
  //
  // public methods
  const getShipList = () => shipList;
  const getArray = () => board;
  const getAttackArray = () => board.map((r) => r.map((e) => e.hit));
  const getHitArray = () => board.map((r) => r.map((e) => e.id && e.hit));
  const isGameOver = () => shipList.every((ship) => ship.isSunk());
  /*
   *
   * placeShip(coordinates)
   *  params:
   *    coordinates: a range of integers
   *      using multidimension array syntax [y][x]
   *      [ [y1 , x1], [y2, x2], [y3, x3], ... ]
   *  return:
   *    illegal placement => false
   *    otherwise => true
   */
  const placeShip = (c) => {
    if (c.some((x) => board[x[0]][x[1]].id)) {
      return false;
    } else {
      const ship = shipFactory(c.length, pieceID++);
      shipList.push(ship);
      c.forEach((x, i) => {
        ship.setLocation(x, i);
        board[x[0]][x[1]].id = ship.getID();
      });
      return true;
    }
  };
  /*
   *
   * receiveAttack(coordinates)
   *  params:
   *    coordinates: [y,x] // array syntax
   *  return:
   *    [
   *      illegal attack => false /
   *      otherwise => true ,
   *      matches ID => true /
   *      otherwise => null/undefined
   *    ]
   */
  const receiveAttack = (c) => {
    const s = board[c[0]][c[1]];
    return !s.hit
      ? [(s.hit = true), shipList.find((x) => x.getID() === s.id)?.hit(c)]
      : [false, false];
  };

  return {
    getShipList,
    getArray,
    getAttackArray,
    getHitArray,
    placeShip,
    receiveAttack,
    isGameOver,
  };
};

export default gameboardFactory;
