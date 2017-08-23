import * as React from 'react';

import { ILessonPlannerLessonMenuProps, ILessonPlannerLessonMenuState } from './ILessonPlannerLessonMenu';

import { DropdownMenu } from '../ui/DropdownMenu/DropdownMenu';
import { IDropdownMenuListItem } from '../ui/DropdownMenu/IDropdownMenu';

export class LessonPlannerLessonMenu extends React.Component<ILessonPlannerLessonMenuProps, ILessonPlannerLessonMenuState> {
    constructor(props: ILessonPlannerLessonMenuProps) {
        super(props);

        this.state = {
            chosenCourseId: null,
            chosenUnitId: null,
            chosenLessonId: null
        };
    }

    handleCourseChosen(id: number): void {
        console.log(this.props.menu.courseList[this.props.menu.courseList.map((c) => { return c.courseId }).indexOf(id)]);
        this.setState({
            chosenCourseId: id,
            chosenUnitId: null,
            chosenLessonId: null
        });
    }

    handleChosenUnit(id: number): void {
        console.log(id);
        this.setState({
            chosenUnitId: id,
            chosenLessonId: null
        });
    }

    handlChosenLesson(id: number): void {
        console.log(id);
        this.setState({ chosenLessonId: id });
    }

    render(): JSX.Element {
        let cs = this.props.menu != null ? this.props.menu.courseList : [];
        let us = this.state.chosenCourseId != null ? cs[cs.map((c) => c.courseId).indexOf(this.state.chosenCourseId)].unitList : [];
        let ls = this.state.chosenUnitId != null ? us[us.map((u) => u.unitId).indexOf(this.state.chosenUnitId)].lessonList : [];

        let coursesMenuItems: IDropdownMenuListItem[] = cs.map((c) => {
            return {
                id: c.courseId,
                text: c.courseName
            } as IDropdownMenuListItem;
        });

        let unitsMenuItems: IDropdownMenuListItem[] = us.map((u) => {
            return {
                id: u.unitId,
                text: u.unitName
            } as IDropdownMenuListItem;
        });

        let lessonsMenuItems: IDropdownMenuListItem[] = ls.map((l) => {
            return {
                id: l.lessonId,
                text: l.lessonName
            } as IDropdownMenuListItem;
        });

        return (
            <div>
                <DropdownMenu
                    inactiveText="Choose a course"
                    onChange={this.handleCourseChosen.bind(this)}
                    listItems={coursesMenuItems}
                    activeId={this.state.chosenCourseId}
                    disabledText="N/A"
                    disabled={this.props.menu == null}
                />

                <DropdownMenu
                    inactiveText="Choose a unit"
                    onChange={this.handleChosenUnit.bind(this)}
                    listItems={unitsMenuItems}
                    activeId={this.state.chosenUnitId}
                    disabledText="Choose a course first"
                    disabled={this.state.chosenCourseId == null}
                />

                <DropdownMenu
                    inactiveText="Choose a lesson"
                    onChange={this.handlChosenLesson.bind(this)}
                    listItems={lessonsMenuItems}
                    activeId={this.state.chosenLessonId}
                    disabledText="Choose a unit first"
                    disabled={this.state.chosenCourseId == null}
                />
            </div>
        );
    }
}