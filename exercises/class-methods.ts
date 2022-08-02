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
        private _name: string,
        private _genre: GameGenreEnum,
        private _rating: number,
        private _releaseDate: Date,
        private _gameOfYear: boolean,
    ) { }

    private static subtractDates(date1: Date, date2: Date): any {
        var difference = date1.getTime() - date2.getTime();
        return difference
    }

    public getInfo(): Record<string, any> {
        return {
            _name: this._name,
            _genre: this._genre,
            _rating: this._rating,
            _releaseDate: this._releaseDate,
            _gameOfYear: this._gameOfYear,
        };
    }

    public getGameAge(): Date {
        const now = new Date()
        const diff = Game.subtractDates(now, this._releaseDate)
        return diff
    }

    private setRating(rating: number): void {
        this._rating = rating
    }

    public rateGame(rating: number): void {
        if (rating >= 0 && rating <= 10) this.setRating(rating)
    }
}

const horizonNewDawn: Game = new Game(
    'Horizon: New Dawn',
    GameGenreEnum.RPG,
    9.8,
    new Date(2020, 1, 1, 0, 0, 0, 0),
    true,
)
console.log(horizonNewDawn.getInfo())
console.log(horizonNewDawn.getGameAge())
horizonNewDawn.rateGame(10)
console.log(horizonNewDawn.getInfo())