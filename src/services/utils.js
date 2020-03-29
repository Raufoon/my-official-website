export const makeObjectSorter = (keyList, order='desc') => (A, B) => {
  let key, i, j, vA, vB, LESS, MORE;
  if (order === 'desc') {
    LESS = 1; MORE = -1;
  } else {
    LESS = -1; MORE = 1;
  }

  for (i=0; i < keyList.length; i++) {
    key = keyList[i];
    if (key instanceof Array) {
	  for (j=0, vA = A, vB = B; j<key.length; j++) {
		vA = vA[key[j]];
		vB = vB[key[j]];
	  }
	} else {
      vA = A[key];
      vB = B[key];
	}
	if (vA < vB) return LESS;
	else if (vA > vB) return MORE;
  }
  return 0;
};
