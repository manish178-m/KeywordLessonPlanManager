import { DataRetriever } from './DataServices/DataRetriever';

import { ICourse } from './ClientData/Course';

export class LessonPlanManager {
    db: DataRetriever;

    courseTransformer(data: any): ICourse {
        return { CourseId: data.valueId, CourseName: data.valueName } as ICourse;
    }

    constructor() {
        this.db = new DataRetriever();

        // TEMP TEMP TEMP TEMP TEMP
        var test = this.db.FetchList<ICourse>(this.courseTransformer);
    }
}
