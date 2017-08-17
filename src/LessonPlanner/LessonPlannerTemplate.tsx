//////////////////////////////////////////////////////////////////////////////
// This file shows the basic minimum requirements to make a react component // 
// Once you've done a couple, they become much easier to make               //
//////////////////////////////////////////////////////////////////////////////

import * as React from 'react';

import { ILessonPlannerProps, ILessonPlannerState } from './ILessonPlanner';

import { ILessonPlanMenu, ICourseMenuItem, IUnitMenuItem, ILessonMenuItem } from '../Services/ClientData/LessonPlanMenu';
import { LessonPlanMenuService } from '../Services/LessonPlanMenuService';

export class LessonPlanner extends React.Component<ILessonPlannerProps, ILessonPlannerState> {
    constructor(props: ILessonPlannerProps) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div></div>
        );
    }
}
