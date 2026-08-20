// complete the challenge here 👇
const createVirtualPet = (name, species, mood) => {
    return {
        name,
        species,
        mood
    }
}

let pets = [
    createVirtualPet('Pixel', 'dog', .8),
    createVirtualPet('Bitsy', 'cat', .6),
    createVirtualPet('Datastream', 'fish', .5),
]

let petSanctuary = {}
const addToSanctuary = (virtualPet) => {
    petSanctuary[virtualPet.name] = virtualPet
}

addToSanctuary(pets[0]);
addToSanctuary(pets[1]);
addToSanctuary(pets[2]);

console.log(petSanctuary);

const isPetInSanctuary = (petName) => {
    return petName + ' is in sanctuary: ' + (petName in petSanctuary)
}


console.log(isPetInSanctuary('Pixel'))
console.log(isPetInSanctuary('Glitch'))

const generatePetReport = (petSancturary) => {
    console.log('--Pet Report--')
    for (const petSancturaryKey in petSancturary) {
        console.log(petSancturaryKey.toUpperCase() + ': ' + petSancturary[petSancturaryKey])
    }
}

generatePetReport(pets[0])
generatePetReport(pets[1])
generatePetReport(pets[2])
const findHappyPets = (mood) => {
    let happyPets = [];
    for (const petSanctuaryKey in petSanctuary) {
        let item = petSanctuary[petSanctuaryKey];
        if (item.mood >= mood) {
            happyPets.push(item)
        }
    }
    return happyPets
}

console.log(findHappyPets(.7));