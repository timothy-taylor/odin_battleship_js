import gameLoop from './gameloop.js';
import playerBoard from './playerDOM.js';
import enemyBoard from './enemyDOM.js';
import './style.css';

const [player, enemy] = gameLoop();

//
//
// DOM manipulation
const supercontainer = document.createElement("DIV");
supercontainer.classList.add("supercontainer");
const containerOne = document.createElement("DIV");
const containerTwo = document.createElement("DIV");
const headerPlayer = document.createElement("H1");
headerPlayer.innerHTML = "Defend";
const headerEnemy = document.createElement("H1");
headerEnemy.innerHTML = "Attack";

containerOne.appendChild(headerEnemy);
containerOne.appendChild(enemyBoard(enemy));
containerTwo.appendChild(headerPlayer);
containerTwo.appendChild(playerBoard(player));
supercontainer.appendChild(containerOne);
supercontainer.appendChild(containerTwo);

const footer = document.createElement("FOOTER");
footer.innerHTML = "TGT 2021";

document.body.appendChild(supercontainer);
document.body.appendChild(footer);

//
//
// Event listeners & related methods
const eI = Array.from(document.querySelectorAll(".attack"));
const eB = document.getElementById("enemy");

const gameOverDOM = (user,bool) => {
  if (user.getBoard().isGameOver()) {
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    const header = document.createElement('H1');
    header.innerHTML = bool ? 'Hurray, you win!' : 'Sorry, you lose!';
    modal.appendChild(header);
    document.body.appendChild(modal);
  }
}
const cpuMoveDOM = () => {
  const rc = enemy.rndAttack(player);
  const playerSquare = document.getElementById(rc[1].toString() + "-player");
  playerSquare.style.borderColor = "red";
  gameOverDOM(player,false);
};
const playerMoveDOM = e => {
  if (eI.includes(e.target)) {
    const arr = e.target.id.split(",").map((s) => Number(s));
    const rc = player.attack(enemy, arr);
    e.target.style.backgroundColor = rc[1] ? "lightsalmon" : "cornflowerblue";
    gameOverDOM(enemy,true);
    cpuMoveDOM();
  }
};

eB.addEventListener("click", playerMoveDOM);
