const LeetCode = () => {
  function removeElement(nums: number[], val: number): number {
    let count = 0;
    for (let index = nums.length - 1; index >= 0; index--) {
      if (nums[index] === val) {
        nums.splice(index, 1);
      } else {
        count++;
      }
      console.log(nums);
    }
    return count;
  }

  return <div>{removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)}</div>;
};
export default LeetCode;
