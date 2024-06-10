function logString(param: unknown): void {
  if (typeof param === "string") console.log(param);
  else console.log("Error! The provided value is not a string");
}

logString("Hello");
