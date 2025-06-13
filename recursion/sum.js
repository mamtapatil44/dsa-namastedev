
function sum(n){
    if(n === 0) return 0;
    return n+ sum(n-1)
}
console.log(sum(10))

let arr = [5,3,2,10,1]
function sumarr(n){
    if (n === 0) return arr[n];
    return arr[n] + sumarr(n-1);

}

console.log("arry smu",sumarr((arr.length - 1)))


function sumOddNumbers(n){
    let isOdd = (arr[n]%2 !==0)
    if (n === 0) return isOdd ? arr[n] :0;
        return isOdd ? arr[n] + sumOddNumbers(n-1) : 0 + sumOddNumbers(n-1);

  
}

console.log("arry odd",sumOddNumbers((arr.length - 1)))

function factorial(n){
    if(n === 0) return 1;

    return n * factorial(n-1)

}

console.log("factorial==>" ,factorial(5))