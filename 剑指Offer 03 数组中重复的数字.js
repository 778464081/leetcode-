/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
//   let set = new Set();
//   let temp = -1;
//   for(let i = 0;i<nums.length;i++){
//       if(set.has(nums[i])){
//           temp = nums[i];
//           break;
//       }else{
//           set.add(nums[i]);
//       }
//   }
//   return temp;
    let map = new Map();
    for(let i of nums){
        if(map.has(i))return i;
        map.set(i,1); 
    }
};