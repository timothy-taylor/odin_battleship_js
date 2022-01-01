import gameSetup from "./setupgame.js";
import playerBoard from "./playerDOM.js";
import enemyBoard from "./enemyDOM.js";
import * as Icons from "./icons.js";
import "./style.css";

const [PLAYER, ENEMY] = gameSetup();

//
//
// DOM
function attackContainer() {
  const containerOne = document.createElement("DIV");
  const headerEnemy = document.createElement("H2");
  headerEnemy.innerHTML = "Attack";
  containerOne.appendChild(headerEnemy);
  containerOne.appendChild(enemyBoard(ENEMY));
  return containerOne;
}

function defendContainer() {
  const containerTwo = document.createElement("DIV");
  const headerPlayer = document.createElement("H2");
  headerPlayer.innerHTML = "Defend";
  containerTwo.appendChild(headerPlayer);
  containerTwo.appendChild(playerBoard(PLAYER));
  return containerTwo;
}

const supercontainer = document.createElement("DIV");
supercontainer.classList.add("supercontainer");
supercontainer.appendChild(attackContainer());
supercontainer.appendChild(defendContainer());

const footer = document.createElement("FOOTER");
footer.innerHTML = "TGT 2021";

document.body.appendChild(supercontainer);
document.body.appendChild(footer);

//
//
// Event listeners & related methods
const eI = Array.from(document.querySelectorAll(".attack"));
const eB = document.getElementById("enemy");

const gameOverDOM = (user, bool) => {
  if (user.getBoard().isGameOver()) {
    const modal = document.createElement("DIV");
    modal.classList.add("modal");
    const content = document.createElement("DIV");
    content.classList.add("modalcontent");
    const header = document.createElement("H1");
    header.innerHTML = bool ? "Hurray, you win!" : "Sorry, you lose!";
    const refresh = document.createElement("A");
    refresh.href = "javascript:location.reload(true)";
    refresh.innerHTML = "Play again";
    content.appendChild(header);
    content.appendChild(refresh);
    modal.appendChild(content);
    document.body.appendChild(modal);
  }
};
const cpuMoveDOM = () => {
  const rc = ENEMY.rndAttack(PLAYER);
  const playerSquare = document.getElementById(rc[1].toString() + "-player");
  playerSquare.innerHTML = Icons.ex;
  gameOverDOM(PLAYER, false);
};
const playerMoveDOM = (e) => {
  if (eI.includes(e.target)) {
    const arr = e.target.id.split(",").map((s) => Number(s));
    const rc = PLAYER.attack(ENEMY, arr);
    e.target.style.backgroundColor = rc[1] ? "lightsalmon" : "cornflowerblue";
    e.target.innerHTML = rc[1] ? Icons.hit : Icons.miss;
    gameOverDOM(ENEMY, true);
    cpuMoveDOM();
  }
};

eB.addEventListener("click", playerMoveDOM);
