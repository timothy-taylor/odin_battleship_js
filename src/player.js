import gameboardFactory from "../src/gameboard.js";

const playerFactory = () => {
  //
  // private instance variables
  const board = gameboardFactory();

  //
  // private methods
  const wrappedRnd = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rndC = (x) => [wrappedRnd(0, x), wrappedRnd(0, x)];

  //
  //
  // public methods
  const getBoard = () => board;
  const attack = (e, c) => e.getBoard().receiveAttack(c);
  const rndAttack = (e) => {
    const c = rndC(10);
    return [attack(e, c) || rndAttack(e), c];
  };
  const rndPlace = (size) => {
    const c = rndC(11 - size);
    const horizontal = Math.random() > 0.5 ? true : false;
    const arr = [];
    let newC;
    arr.push(c);
    for (let i = 0; i < size - 1; i++) {
      if (horizontal) {
        newC = [arr[arr.length - 1][0], arr[arr.length - 1][1] + 1];
      } else {
        newC = [arr[arr.length - 1][0] + 1, arr[arr.length - 1][1]];
      }
      arr.push(newC);
    }
    board.placeShip(arr) || rndPlace(size);
  };

  return {
    getBoard,
    attack,
    rndAttack,
    rndPlace,
  };
};

export default playerFactory;
