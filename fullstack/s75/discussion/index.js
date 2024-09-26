function determineWaterState(temperature) {
  
  if (typeof temperature !== 'number') {
    return undefined
  }
  
  // return temperature
  if (temperature < 0) {
    return "solid";
  } else if (temperature <= 100) {
    return "liquid";
  } else {
    return "gas";
  }
};

function sumUpToN(n) {
  if (typeof n !== "number" || n < 1 || n % 1 !== 0) {
      return undefined;
  }
  // return n;
  let sum = 0;
  for (let x = 1; x <= n; x++ ) {
    sum += x
  }
  return sum;
};