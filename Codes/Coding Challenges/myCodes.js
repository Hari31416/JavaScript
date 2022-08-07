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
// console.log(isPrime(5754853343));
let array = [];
for (let j = 1; j < 1000000; j += 2) {
  if (isPrime(j)) {
    array.push(j);
  }
}
console.log(array[array.length - 1]);
var t1 = performance.now();
console.log("It took " + (t1 - t0) * 100 + " milliseconds.");
