
function binarySearch(arr,target){
    let left = 0 ;
    let right = arr.length - 1

    while(right >= left){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === target){
            return mid;
        }
        else if( arr[mid] < target){
            left = mid + 1 // serach in right side only
        }
        else{
            right = mid -1 // serch in left side olny
        }

    }

    return -1

}

console.log((binarySearch([-1,0,3,5,9,11],9)));