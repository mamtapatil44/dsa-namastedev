//  outer loop is responsible for rows
// inner loop is responsible for col

function starPattrn(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

starPattrn(4);

console.log("=============================================");
function leftRightAngle(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

leftRightAngle(4);

console.log("=============================================");
function leftRightNumber(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

leftRightNumber(4);
console.log("=============================================");

function rightRightTrianle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

rightRightTrianle(4);
console.log("=============================================");

function rightZeroOne(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggel = 1;
    for (let k = 0; k < i + 1; k++) {
      row += toggel;
      if (toggel == 1) {
        toggel = 0;
      } else {
        toggel = 1;
      }
    }

    console.log(row);
  }
}

rightZeroOne(5);
console.log("=============================================");

function rightZeroOneNoRefresh(n) {
  let toggel = 1;
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let k = 0; k < i + 1; k++) {
      row += toggel;
      if (toggel == 1) {
        toggel = 0;
      } else {
        toggel = 1;
      }
    }

    console.log(row);
  }
}

rightZeroOneNoRefresh(5);
console.log("=============================================");
