import gameboardFactory from "../src/gameboard.js";

const playerFactory = () => {
  //
  // private instance variables
  const board = gameboardFactory();

  //
  // private methods
  const rndC = () => [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];

  //
  //
  // public methods
  const getBoard = () => board;
  const attack = (e, c) => e.getBoard().receiveAttack(c);
  const rndAttack = (e) => {
    const c = rndC();
    return [attack(e, c)[0] || rndAttack(e), c];
  };

  return {
    getBoard,
    attack,
    rndAttack,
  };
};

export default playerFactory;
