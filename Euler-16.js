const powerDigitSum = n => {
  return Math.pow(2, n)
  .toString()
  .split('')
  .map(c => parseInt(c))
  .reduce((r, n) => r + n)
}

// works for 15, but returns NaN for 1000
console.log(powerDigitSum(15))
