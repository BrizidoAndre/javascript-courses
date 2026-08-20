// complete the challenge here 👇
function createPotion(
    baseIngredient = 'water',
    catalystIngredient = 'moonstone dust',
    powerBooster = 'dragon breath'
) {
    return `A mystical brew of ${baseIngredient}, ${catalystIngredient}, and ${powerBooster}`
}

console.log(createPotion())
console.log(createPotion('witch hazel'))
console.log(createPotion('toadstool extract', 'pixie wings'))
console.log(createPotion('shadow essence', 'vampire tears', 'phoenix ash'))


function chastCharm(target) {
    return 'May luck and fortune smile upon ' + target + '!'
}

console.log(chastCharm('Elara the Elf'))

const calculateSpeelPower = (age) => {
    return age * 10;
}

console.log('Spell Power: ' + calculateSpeelPower(25))

const castFireball = (power) => {
    return 'Fireball blazes with power ' + power + '!'
}
const summonWaterSprout = (power) => {
    return 'Water spout surges with power ' + power + '!'
}
const calLightning = (power) => {
    return 'Lightning strikes with power ' + power + '!'
}
let elementalSpells = [
    castFireball,
    summonWaterSprout,
    calLightning,
];

elementalSpells.forEach((f, i) => {
    console.log(f(i + 1));
})

const determineSpeelStrength = (power) => {
    if (power < 50) {
        return 'Weak';
    } else if (power <= 100) {
        return 'Moderate'
    } else {
        return 'Strong'
    }
}

console.log(determineSpeelStrength(30))
console.log(determineSpeelStrength(70))
console.log(determineSpeelStrength(150))

const transformIngredients = (ingredients, transformation) => {
    return ingredients.map(transformation)
}
console.log(transformIngredients([
    'newt eyes',
    'toe of frog',
    'wool of bat',
    'tongue of dog'
], (ingredient) => `enchanted ${ingredient}`));