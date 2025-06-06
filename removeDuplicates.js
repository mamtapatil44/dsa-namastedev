function removeDuplicates(arr) {
  let n = arr.length;
  let x = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  console.log(arr);
  return x + 1;
}
console.log(
  "duplicate numbders",
  removeDuplicates([0, 0, 1, 5, 1, 2, 2, 3, 5, 4])
);

function RemoveElement(arr, value) {
  let n = arr.length;
  let x = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== value) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}

console.log("RemoveElement", RemoveElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 1));

function reverseStringofArr(s) {
  return s.reverse();
}

console.log(
  "reverseStringofArr",
  reverseStringofArr(["h", "e", "l", "l", "o"])
);

function reverseStringofArrWIthValue(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i];
    s[i] = s[s.length- 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
}
console.log(
    "reverseStringofArrWIthValue===",
    reverseStringofArrWIthValue(["h", "e", "l", "l", "o"])
  );


  function moveZeros(nums) {
    let x= 0;

    for(let i =0 ;i < nums.length;i++){
        if(nums[i] > 0){
            nums[x] = nums[i];
            x= x+1;

        }

    }

    for(let i =x ;i <nums.length;i++){
       nums[i] =0
    }
    return nums;
    
};


console.log("mpving zeros= ",moveZeros([0,1,0,3,12]))