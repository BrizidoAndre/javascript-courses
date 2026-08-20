// complete the challenge here 👇
const numbers = [
  23,
  54,
  32,
  87,
  47,
  15,
  98,
  6,
  63,
  41
]
let even = numbers.filter((n) => n % 2 === 0)
let odd = numbers.length - even.length
console.log('Even numbers: ' + even.length)
console.log('Odd numbers: ' + odd)

let low = 0
let medium = 0
let high = 0

numbers.forEach((n) => {
  if (n < 30) {
    low++
  } else if (n <= 70) {
    medium++
  } else {
    high++
  }
})

console.log('Low: ' + low)
console.log('Medium: ' + medium)
console.log('High: ' + high)

let sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
let avg = sum / numbers.length

console.log('Sum: ' + sum)
console.log('Average: ' + avg)

