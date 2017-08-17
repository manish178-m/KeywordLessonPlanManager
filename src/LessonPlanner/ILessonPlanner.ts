// Interfaces for the LessonPlanner component

// Import any data types or interfaces we need for this components state or props
import { ILessonPlanMenu } from '../Services/ClientData/LessonPlanMenu';

// This is the interface for the "properties" of the component. 
// Props are values or callback functions which are passed into the component from its parent
export interface ILessonPlannerProps {

}

// This is the interface for the "state" of the component
// The state is a set of values which exist only inside the component, 
// and can only be edited by that component. 
export interface ILessonPlannerState {
    lessonMenu: ILessonPlanMenu;
}