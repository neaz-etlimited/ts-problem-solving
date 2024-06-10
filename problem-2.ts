function findLargestNumber(num: number[]): number {
  let largestNuber: number = 0;

  for (let i = 0; i <= num.length; i++) {
    if (num[i] > largestNuber) {
      largestNuber = num[i];
    }
  }

  return largestNuber;
}

console.log(findLargestNumber([2, 3, 6, 1]));
