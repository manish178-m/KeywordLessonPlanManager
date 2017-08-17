export interface ILessonPlanMenu {
    courseList: ICourseMenuItem[];
}

export interface ICourseMenuItem {
    courseId: number;
    courseName: string;
    unitList: IUnitMenuItem[];
}

export interface IUnitMenuItem {
    unitId: number;
    unitName: string;
    lessonList: ILessonMenuItem[];
}

export interface ILessonMenuItem {
    lessonId: number;
    lessonName: string;
}
