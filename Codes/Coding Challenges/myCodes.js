var t0 = performance.now();
function isPrime(n) {
  if (n === 1 || n % 2 === 0) {
    if (n === 2) {
      return true;
    }
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 3; i < Math.floor(Math.sqrt(n)) + 1; i = i + 2) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(isPrime(4256233));
var t1 = performance.now();
console.log("It took " + (t1 - t0) * 100 + " milliseconds.");
