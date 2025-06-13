
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