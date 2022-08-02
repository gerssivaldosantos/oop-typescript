// third example: heritage

enum CategoryEnum {
    quimic = 'Quimic',
    fisic = 'Fisic',
    fisiologic = 'Fisiologic',
    literary = 'Literary',
    peace = 'Peace'
}

interface INobel {
    category: CategoryEnum;
    year: number; 
}

abstract class Person {
    private name: string = ''
    private birthday: Date = new Date()
    private isPretty: boolean = false

    constructor(name: string, birthday: Date, isPretty: boolean) {
        this.name = name
        this.birthday = birthday
        this.isPretty = isPretty
    }
}


class NobelWinner extends Person {
    private prizes: INobel[] = []

    constructor(
        name: string,
        birthday: Date,
        isPretty: boolean,
        prizes: INobel[]) {
        super(name, birthday, isPretty)
        this.prizes = prizes
    }
}

const marieCurie: NobelWinner = new NobelWinner(
    'Marie Curie',
    new Date('1867-11-07'),
    true,
    [
        { category: CategoryEnum.fisic, year: 1903 },
        { category: CategoryEnum.quimic, year: 1911 },
    ]
)

console.log(marieCurie)
