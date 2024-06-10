function filterEvenNumbers(num: number[]): number[] {
  return num.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8]));
