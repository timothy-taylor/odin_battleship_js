import shipFactory from "../src/ship.js";

const SIZE = 3;
const RANGE = [
  [0, 0],
  [0, 1],
  [0, 2],
];
const ID = 0;
let ship;
let testArray;

beforeEach(() => {
  testArray = [...Array(SIZE)];
  for (let i = 0; i < SIZE; i++) {
    testArray[i] = { hit: false, location: [0, i] };
  }
  ship = shipFactory(SIZE, ID);
  RANGE.forEach((c, i) => ship.setLocation(c, i));
});

test("hit() => updates objects in hitArray", () => {
  testArray[1].hit = true;
  ship.hit(RANGE[1]);
  expect(ship.getHitArray()).toStrictEqual(testArray);
});

test("isSunk() => false unless conditions are met", () => {
  expect(ship.isSunk()).toBe(false);
});

test("isSunk() => false unless conditions are met", () => {
  ship.hit(RANGE[1]);
  ship.hit(RANGE[0]);
  expect(ship.isSunk()).toBe(false);
});

test("isSunk() => true if conditions are met", () => {
  RANGE.forEach((c) => ship.hit(c));
  expect(ship.isSunk()).toBe(true);
});
