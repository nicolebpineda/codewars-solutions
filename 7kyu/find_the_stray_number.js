// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// My solution
// Take in an array of numbers, all of which are the same except one number
function stray(nums) {
    // Arrange array in numerical order
    nums.sort((a,b) => a-b)
    // Return single different number
    return nums[0] === nums[1] ? nums[nums.length - 1] : nums[0]
}
  