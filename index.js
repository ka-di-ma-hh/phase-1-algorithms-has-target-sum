function hasTargetSum(arr, target) {
  const seenNumbers = {};

  for (let num of arr) {
    const difference = target - num;
    if (seenNumbers[difference]) {
      return true;
    }
    seenNumbers[num] = true;
  }

  return false;
}
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));

 
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;