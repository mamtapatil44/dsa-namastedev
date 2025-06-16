function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (arr[min] !== arr[i]) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr
}

console.log("selection sort " ,selectionSort([7,1,5,4,3,2]))