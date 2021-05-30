let isPrimeCheck = false;
function isPrime(n) {
  if (n === 1 || n === 2 || n % 2 === 0) {
    isPrimeCheck = false;
    if (n === 2) {
      isPrimeCheck = true;
    }
  }
  for (let i = 3; i <= n; i = i + 2) {
    if (n % i === 0) {
      isPrimeCheck = false;
    }
  }
  isPrimeCheck = true;
}
isPrime(10);
console.log(isPrimeCheck);
