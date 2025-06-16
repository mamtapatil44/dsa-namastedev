function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prev = i - 1;

    while (arr[prev] >= current && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = current;
  }
  return arr;
}
console.log("insertion sort" ,insertionSort([3,4,5,7,1,2]))