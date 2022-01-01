const COLORS = [
  "lightsalmon",
  "cadetblue",
  "cornflowerblue",
  "darkseagreen",
  "lightcoral",
  "lightblue",
  "lightslategrey",
  "plum",
  "thistle",
  "olive",
  "darkcyan",
  "palegreen",
  "pink",
  "powderblue",
  "salmon",
  "lightpink",
];

export default function (player) {
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
        if (e.id) {
          item.style.backgroundColor = COLORS[e.id];
        }
        item.id = `${i},${j}-player`;
        container.appendChild(item);
      })
    );
  return container;
}
