class Solution {
    splitArray(nums, k) {
        function isValid(mid) {
            let count = 0;
            let currSum = 0;

            for (const num of nums) {
                currSum += num;
                if (currSum > mid) {
                    count++;
                    currSum = num;
                }
            }

            return count + 1 <= k;
        }

        let left = Math.max(...nums);
        let right = nums.reduce((acc, num) => acc + num, 0);

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (isValid(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}


const sol = new Solution();
const arr1 = [1, 2, 3, 4];
const k1 = 3;
console.log(sol.splitArray(arr1, k1)); 

const arr2 = [1, 1, 2];
const k2 = 2;
console.log(sol.splitArray(arr2, k2)); 
