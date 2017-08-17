import * as React from 'react';

import { ILessonPlannerLessonMenuProps, ILessonPlannerLessonMenuState } from './ILessonPlannerLessonMenu';

import { DropdownMenu } from '../ui/DropdownMenu/DropdownMenu';
import { IDropdownMenuListItem } from '../ui/DropdownMenu/IDropdownMenu';

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