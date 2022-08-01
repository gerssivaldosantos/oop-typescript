// Second example: Game class with methods

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
        private name: string,
        private genre: GameGenreEnum,
        private rating: number,
        private releaseDate: Date,
        private gameOfYear: boolean,
    ) {}

    public getInfo(): Record<string, any> {
        return {
            name: this.name,
            genre: this.genre,
            rating: this.rating,
            releaseDate: this.releaseDate,
            gameOfYear: this.gameOfYear,
        };
    }
}

const horizonNewDawn: Game = new Game(
    'Horizon: New Dawn',
    GameGenreEnum.RPG,
    9.8,
    new Date(2020, 1, 1),
    true,
)
console.log(horizonNewDawn.getInfo())