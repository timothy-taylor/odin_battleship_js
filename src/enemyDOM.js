export default function (enemy) {
  const container = document.createElement("DIV");
  container.classList.add("container");
  container.id = "enemy";
  enemy
    .getBoard()
    .getArray()
    .forEach((r, i) =>
      r.forEach((_, j) => {
        const item = document.createElement("DIV");
        item.classList.add("item");
        item.classList.add("attack");
        item.id = `${i},${j}`;
        container.appendChild(item);
      })
    );
  return container;
}
