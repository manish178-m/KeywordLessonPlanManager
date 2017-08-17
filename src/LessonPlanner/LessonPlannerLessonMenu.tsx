import * as React from 'react';

import { ILessonPlannerLessonMenuProps, ILessonPlannerLessonMenuState } from './ILessonPlannerLessonMenu';

export class LessonPlannerLessonMenu extends React.Component<ILessonPlannerLessonMenuProps, ILessonPlannerLessonMenuState> {
    constructor(props: ILessonPlannerLessonMenuProps) {
        super(props);

        this.state = {
            courses: [],
            activeUnits: [],
            activeLessons: [],
            chosenCourseId: null,
            chosenUnitId: null,
            chosenLessonId: null
        };
    }

    render(): JSX.Element {
        return (
            <div>

            </div>
        );
    }
}