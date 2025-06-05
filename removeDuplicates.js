

function removeDuplicates(arr){
    let n = arr.length;
    let x =0 ;
    for(let i =0 ; i <n ;i++){
        if(arr[i] > arr[x]){
            x = x+1;
            arr[x] =arr[i]
        }

    }
console.log(arr)
 return x+1;
}
console.log("duplicate numbders" ,removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

function RemoveElement(arr,value){
    let n = arr.length;
    let x= 0;
    for(let i =0 ;i <n;i++){
        if(arr[i] !== value){
            arr[x] = arr[i];
            x = x+1
        }

    }
  return x;
}

console.log("RemoveElement" ,RemoveElement([0,0,1,1,1,2,2,3,3,4],1))