export interface ICourse {
    CourseId: number;
    CourseName: string;
}

export class Course implements ICourse {
    CourseId: number;
    CourseName: string;

    public static async getData(): Promise<any> {
        return "SELECT * FROM Course;"
    }

    public static transform(data: any): ICourse {
        return {
            CourseId: data.courseId,
            CourseName: data.courseName
        } as ICourse;
    }
}
