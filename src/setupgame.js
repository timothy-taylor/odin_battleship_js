import playerFactory from "./player.js";

export default function () {
  const player = playerFactory();
  const enemy = playerFactory();
  [5, 4, 4, 3, 3, 3, 2, 2].forEach((n) => {
    player.rndPlace(n);
    enemy.rndPlace(n);
  });

  return [player, enemy];
}
