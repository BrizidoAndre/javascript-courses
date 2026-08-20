// complete the challenge here 👇
let garden = [
  'Tomato',
  'Carrot',
  'Lettuce',
  'Cucumber',
  'Pepper'
]

console.log('Initial garden: ' + garden)

garden.push('Pumpkin')
garden.unshift('Sunflower')

console.log('Updated garden: ' + garden)
console.log('Number of plants: ' + garden.length)
let [
  end,
  start
] = [
  garden.pop(),
  garden.shift()
]

console.log(`Harvested: ${start} and ${end}`)

let cucumberIndex = garden.indexOf('Cucumber')
garden.splice(cucumberIndex, 1, 'Bell Pepper')
console.log('Replaced plant at index: ' + cucumberIndex)

console.log('Garden after replacement ' + garden)

console.log('Garden includes Weeds: ' + garden.includes('Weeds'))
