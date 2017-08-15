// Import react stuff
import * as React from 'react';

// Import interfaces for this component
// I have put these in a different file to make it easier to read.
// I will use a folder for each component to keep the code structured nicely.
import { ILessonPlannerProps, ILessonPlannerState } from './ILessonPlanner';

// Each component, which can be thought of as any individual bit of html in your app
// is a class which extends React.Component
// React.Component accepts two interfaces, the props and state for this component
export class LessonPlanner extends React.Component<ILessonPlannerProps, ILessonPlannerState> {
    // Constructor for this component class
    // The constructor for a react component accepts 1 parameter of the same type as the props interface
    constructor(props: ILessonPlannerProps) {
        // With javascript when we extend another class, we always have to call "super()"
        // in the constructor. In this case, the parent class expects the props parameter.
        super(props);
    }

    // The render function is where we write the html for this component. 
    // We can mix in javascript values by using the {handlebar} syntax
    // Since typescript gives javascript proper data types, 
    // we can say that the render function returns a "JSX.Element" data type.
    render(): JSX.Element {
        //We can do any logic we need just for rendering here
        // The we return the html for this component which will appear on the screen
        return (
            // We can only return 1 top level html component here
            <div></div>
        );
    }
}
