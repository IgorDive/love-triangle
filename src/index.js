/**
 * @param prf - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(prf = []) {
  let count = 0;

  for (i = 0; i < prf.length; i++) {
    if ((prf[prf[prf[i] - 1] -1] - 1 === i) && (prf[i] - 1 > i) && (prf[prf[i] - 1] - 1 > i)) count++;
  };
  return count;
};
