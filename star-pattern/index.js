//  outer loop is responsible for rows 
// inner loop is responsible for col

function starPattrn(n){
   
    for(let i =0 ; i < n ;i++){
         let row = ''
        for(let j =0 ; j < n ;j++){
            row += "*";

        }
        console.log(row)
    }

}

starPattrn(4)

console.log("=============================================")
function leftRightAngle(n){
    for(let i =0 ; i<n ;i++){
        let row = ' ';
        for(let j= 0; j < i+1;j++){
          row = row + "*"
        }
      console.log(row)
    }

}

leftRightAngle(4)


console.log("=============================================")
function leftRightNumber(n){
    for(let i =0 ; i<n ;i++){
        let row = ' ';
        for(let j= 0; j < i+1;j++){
          row = row + (j+1)
        }
      console.log(row)
    }

}

leftRightNumber(4)
console.log("=============================================")