// Import MOCKS until live service can be connected up
import { LessonPlansData } from './MockData/LessonPlan';

// Import data types used by this used
import { ILessonPlan } from './ClientData/LessonPlan';

export class LessonPlanService {
    constructor() {

    }

    public async GetAllLessonPlans(lessonId: number): Promise<ILessonPlan[]> {
        return new Promise<ILessonPlan[]>((resolve, reject) => { resolve(LessonPlansData()); });
    }
}
