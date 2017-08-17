// Import MOCKS until live service can be connected up
import { units } from './MockData/Unit';

// Import data types used by this used
import { IUnit } from './ClientData/Unit';

export class UnitService {
    constructor() {

    }

    public async GetAllUnits(): Promise<IUnit[]> {
        return new Promise<IUnit[]>((resolve, reject) => { resolve(units); });
    }
}
