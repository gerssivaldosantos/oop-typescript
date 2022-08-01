interface IVehicle {
    move(): void
}

interface IEngine {
    turnOn(): void
    turnOff(): void
    getState(): boolean
    getName(): string
}

interface IConductPiece {
    conduct(): void
}

class Engine implements IEngine {
    /* TODO: search about typescript memory allocation to class 
    parameters (constructor initialization X Directly initialization) */
    private state: boolean = false
    private name: string = ''

    constructor(name: string) {
        this.name = name
    }

    public getName(): string {
        return this.name
    }

    public getState(): boolean {
        return this.state
    }

    public turnOn(): void {
        this.setState(true)
    }

    public turnOff(): void {
        this.setState(false)
    }

    private setName(name: string): void {
        this.name = name
    }

    private setState(state: boolean): void {
        this.state = state;
    }

}

class VehicleEngine implements IVehicle {
    private vehicleState: boolean = false
    private engine: IEngine = new Engine('veichle engine')

    private getState():boolean{
        return this.vehicleState
    }

    private setState(state: boolean): void {
        this.vehicleState = state
    }

    public turnOnVehicle() {
        if (!this.vehicleState) {
            this.engine.turnOn()
            this.setState(true)
        }
    }

    public stopVehicle() {
        if (this.vehicleState) {
            this.engine.turnOff()
            this.setState(false)
        }
    }

    public move() {
        if (this.getState()) {
            console.log(`${this.engine.getName()} is turnOned`)
        }
    }
}

class ConductPiece implements IConductPiece {
    conduct(): void {
        console.log('Conducting')
    }
}

class Handlebar extends ConductPiece {
    conduct(): void {
        console.log('Handlebar is conducting')
    }
}

class SteeringWheel extends ConductPiece {
    conduct(): void {
        console.log('Steering wheel is conducting')
    }
}

class Motocycle extends VehicleEngine {
    private handlebar: Handlebar = new Handlebar()
}

class Car extends VehicleEngine {
    private isConductDoorOpen:boolean = false
    private steeringWheel: SteeringWheel = new SteeringWheel()
    
    private setOpenConductDoorState(state: boolean): void {
        this.isConductDoorOpen = state
    }

    private openConductDoor(): void {
        this.setOpenConductDoorState(true)
    }
}
