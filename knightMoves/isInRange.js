export function isInRange(coordinate, checkMax = true, checkBoth = false) {
  const min = 0,
    max = 7;

  let inRange;

  if (checkMax) inRange = coordinate <= max;
  else if (checkBoth) inRange = coordinate >= min && coordinate <= max;
  else inRange = coordinate >= min;

  return inRange;
}
