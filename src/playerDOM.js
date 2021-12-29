import * as Icons from './icons.js';

const COLORS = [
  "lightsalmon",
  "cadetblue",
  "cornflowerblue",
  "darkcyan",
  "darkseagreen",
  "lightcoral",
  "lightblue",
  "lightpink",
  "lightslategrey",
  "palegreen",
  "pink",
  "powderblue",
  "salmon",
  "thistle",
  "plum",
  "olive",
];

export default function(player) {
  const container = document.createElement("DIV");
  container.classList.add("container");
  container.id = "player";
  player
    .getBoard()
    .getArray()
    .forEach((r, i) =>
      r.forEach((e, j) => {
        const item = document.createElement("DIV");
        item.classList.add("item");
        if (e.id || e.id === 0) {
          item.style.backgroundColor = COLORS[e.id];
        }
        item.id = `${i},${j}-player`;
        container.appendChild(item);
      })
    );
  return container;
}
