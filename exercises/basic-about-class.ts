// First example: game character class

class Character {
    constructor(
        public name: string,
        public health: number,
        public strength: number,
        public defense: number,
    ) {}
}

const kratos: Character = new Character(
    'kratos',
    100,
    10,
    10,
)
console.log(kratos)