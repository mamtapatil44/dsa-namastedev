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


function reverseNumber(n){
    if(n === 0) return 0;
    let nCopy = n;
    let rev =0;
    n = Math.abs(n);
    while(n >0){
        let last = n %10;
        rev =(rev *10) + last;
        n = Math.floor(n/10);
    }

    return ( nCopy < 0) ? -rev : rev;

}

console.log("reverseNumber", reverseNumber(123));
console.log("reverseNumber", reverseNumber(-423));
