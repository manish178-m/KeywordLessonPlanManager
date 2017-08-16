// Import MOCKS until live service can be connected up
import { courses } from './MockData/Course';

// Import data types used by this used
import { ICourse } from './ClientData/Course';

export class CourseService {
    constructor() {

    }

    GetAllCourses(): ICourse[] {
        return courses;
    }
}
