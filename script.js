function generateFibonacci(n) {
    let fibonacciSequence = [];
  
    if (n === 1) {
      fibonacciSequence.push(0);
    } else if (n >= 2) {
      fibonacciSequence.push(0, 1);
  
      for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
      }
    }
  
    return fibonacciSequence;
  }
  
  const n = 20; // Change this to generate a different number of Fibonacci numbers
  const fibonacciNumbers = generateFibonacci(n);
  console.log(fibonacciNumbers);