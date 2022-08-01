// First example: game character class

enum GameGenreEnum {
    RPG = 'RPG',
    FPS = 'FPS',
    RTS = 'RTS',
    MMORPG = 'MMORPG',
    MOBA = 'MOBA',
    TPS = 'TPS',
    RACING = 'RACING',
    STRATEGY = 'STRATEGY',
    PUZZLE = 'PUZZLE',
    ARCADE = 'ARCADE',
    SIMULATION = 'SIMULATION',
    ADVENTURE = 'ADVENTURE',
}

class Game {
    constructor(
        public name: string,
        public genre: GameGenreEnum,
        public rating: number,
        public releaseDate: Date,
        public gameOfYear: boolean,
    ) {}
}

const horizonNewDawn: Game = new Game(
    'Horizon: New Dawn',
    GameGenreEnum.RPG,
    9.8,
    new Date(2020, 1, 1),
    true,
)
console.log(kratos)