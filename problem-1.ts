function repeatString(str: string, num: number): string {
  let returnValue: string = "";
  for (let i = 0; i < num; i++) {
    returnValue += str;
  }

  return returnValue;
}

console.log(repeatString("Neaz", 3));
