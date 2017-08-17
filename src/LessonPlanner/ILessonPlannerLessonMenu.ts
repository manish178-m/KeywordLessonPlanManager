import {
    ILessonPlanMenu,
    ICourseMenuItem,
    IUnitMenuItem,
    ILessonMenuItem
} from '../Services/ClientData/LessonPlanMenu';

export interface ILessonPlannerLessonMenuProps {
    menu: ILessonMenuItem;

    // onLessonChosen is a callback function passed into this component. 
    // When we choose a lesson from the lesson dropdown, we pass back the ID to the parent component 
    // so the parent can then go to get the next data we need from the server/database
    onLessonChosen: (lessonId: number) => void;
}

export interface ILessonPlannerLessonMenuState {
    courses: ICourseMenuItem[];
    activeUnits: IUnitMenuItem[];
    activeLessons: ILessonMenuItem[];

    chosenCourseId: number;
    chosenUnitId: number;
    chosenLessonId: number;
}
