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