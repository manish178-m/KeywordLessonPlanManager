import { DataRetriever } from './DataServices/DataRetriever';

import { ICourse, Course } from './ClientData/Course';
import { IUnit } from './ClientData/Unit';
import { ILesson } from './ClientData/Lesson';

export class LessonPlanManager {
    db: DataRetriever;

    courseTransformer(data: any): ICourse {
        return { CourseId: data.courseId, CourseName: data.courseName } as ICourse;
    }

    unitTransformer(data: any): IUnit {
        return { UnitId: data.unitId, UnitName: data.unitName, CourseId: data.courseId } as IUnit;
    }

    lessonTransformer(data: any): ILesson {
        return { LessonId: data.lessonId, LessonName: data.lessonName, UnitId: data.unitId } as ILesson;
    }

    constructor() {
        this.db = new DataRetriever();

        // TEMP TEMP TEMP TEMP TEMP
        var test = this.db.FetchList<ICourse>(this.courseTransformer);
    }
}
