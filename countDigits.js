function countDigits(n) {
  if (n == 0) {
    return 1;
  }
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

console.log("counts==", countDigits(256));

function palindrom(n) {
    if( n <0 ) return false;
  let xCopy = n;
  let rev = 0;
  while (xCopy > 0) {
    let rem = xCopy % 10;
    rev = 10 * rev + rem;
    xCopy = Math.floor(xCopy / 10);
  }
  if (n === rev) {
    return true;
  } else {
    return false;
  }
}

console.log("Palindrom", palindrom(121));
