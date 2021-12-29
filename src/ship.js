const shipFactory = (size, id) => {
  //
  // private instance variables
  const hitArray = [...Array(size)];

  //
  //
  // public methods
  const getID = () => id;
  const getSize = () => size;
  const getHitArray = () => hitArray;
  const setLocation = (c, i) => (hitArray[i] = { hit: false, location: c });
  const hit = (c) =>
    (hitArray.find(
      (x) => JSON.stringify(x.location) === JSON.stringify(c)
    ).hit = true);
  const isSunk = () => hitArray.every((x) => x.hit);

  return {
    getID,
    getSize,
    getHitArray,
    setLocation,
    hit,
    isSunk,
  };
};

export default shipFactory;
