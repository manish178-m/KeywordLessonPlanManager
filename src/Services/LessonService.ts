// Import MOCKS until live service can be connected up
import { lessons } from './MockData/Lesson';

// Import data types used by this used
import { ILesson } from './ClientData/Lesson';

export class LessonService {
    constructor() {

    }

    public async GetAllLessons(): Promise<ILesson[]> {
        return new Promise<ILesson[]>((resolve, reject) => { resolve(lessons); });
    }
}
