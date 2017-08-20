import { IndexedDbWrapper } from './IndexedDbWrapper';
import { LocalDataManager } from './LocalDataManager';

export class DataRetriever {
    // This is a trial run for now. It accepts a type of T so it knows what it will return. 
    // And the "transformer" function defines how to convert generic list data into the type T we want. 
    public FetchList<T>(transformer: (d: any) => T): T[] {
        let returnVal: T[] = [];

        let data = [
            {
                valueId: 1,
                valueName: "Course 1"
            },
            {
                valueId: 2,
                valueName: "Course 2"
            }
        ];

        for (var i = 0; i < data.length; i++) {
            returnVal.push(transformer(data[i]));
        }

        return returnVal;
    }
}
