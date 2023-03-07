// pure recursive solution
 var permute = function(nums, curr = []) {

  let result = []

  if (!nums.length) {
      result.push(curr);
  } else {
      nums.forEach((num, i) => {
          let remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
          result = result.concat(permute(remainingNums, curr.concat(num)));
      })
  }

  return result;
};


// with helper function
var permute = function(nums) {
    let result = [];

    let innerFunc = (remainingNums, currentPerm = []) => {
        if (!remainingNums.length) {
            result.push(currentPerm);
        } else {
            for (let i = 0; i < remainingNums.length; i++) {
                let newPerm = currentPerm.slice();
                newPerm.push(remainingNums[i]);
                let newNums = remainingNums.slice();
                newNums.splice(i, 1);
                innerFunc(newNums, newPerm);
            }
        }
    }

    innerFunc(nums);
    return result;
};