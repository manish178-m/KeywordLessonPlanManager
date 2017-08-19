import { DataRetriever } from './DataServices/DataRetriever';

import { ICourse } from './ClientData/Course';

export class LessonPlanManager {
    db: DataRetriever;

    constructor() {
        this.db = new DataRetriever();

        // TEMP TEMP TEMP TEMP TEMP
        var test = this.db.FetchList<ICourse>();
    }
}
