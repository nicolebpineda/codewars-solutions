// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// my soultions
function solution(nums){
    if (nums === null){
      return [];
    } else{
      let sorted = nums.sort((a,b)=> a-b);
    return sorted;
    }
}

function solution(nums){
    return (nums === null ? [] : nums.sort((a,b)=> a-b))    
}

// P - array of numbers or null
// R - array of numbers sorted or an empty array
// E - null => []; [] => []; [1, 7, 5, 2] => [1, 2, 5, 7]
// P - if nums equals null or an empty array, return [], otherwise sort the array and return the sorted array.
