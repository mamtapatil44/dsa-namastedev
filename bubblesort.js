//  buuble sort iterate loop n-1 times;

function bubbleSort(arr) {
    let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true
      }
    }

    if(!swapped) break;
  }

  return arr;
}

console.log("bubble sort ",bubbleSort([5,2,4,1]))
