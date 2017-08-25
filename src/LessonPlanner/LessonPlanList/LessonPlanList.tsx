import * as React from 'react';

import { ILessonPlanListProps, ILessonPlanListState } from './ILessonPlanList';

export class LessonPlanList extends React.Component<ILessonPlanListProps, ILessonPlanListState> {
    constructor(props: ILessonPlanListProps) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div>
                {JSON.stringify(this.props.lessonPlans)}
            </div>
        );
    }
}