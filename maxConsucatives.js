function maxCOnsucativeOnsCOunt(nums) {
  let count = 0;
  let mxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      mxCount = Math.max(count, mxCount);
      count = 0;
    }
  }
  mxCount = Math.max(count, mxCount);
  return mxCount;
}

console.log(maxCOnsucativeOnsCOunt([1, 1, 0, 1, 1, 1]));


function onlySIgnleValue(nums) {
    
    let xor = 0;
 
    for(let i =0 ; i <nums.length; i++){
     xor = xor ^ nums[i]
 
    }
    return xor;
  
 };
