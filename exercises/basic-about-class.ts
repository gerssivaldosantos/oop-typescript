// First example: game character class

class Character{
    name: string = ''
    health: number = 0
    energy: number = 0
    strength: number = 0
    defense: number = 0
}

const kratos: Character = new Character()
kratos.name = 'Kratos'
kratos.health = 100
kratos.energy = 100
kratos.strength = 100
kratos.defense = 100
console.log(kratos)