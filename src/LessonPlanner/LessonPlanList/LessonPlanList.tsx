import * as React from 'react';

import { ILessonPlanListProps, ILessonPlanListState } from './ILessonPlanList';

// Import child components
import { TabbedBox, TabbedBoxTabInfo } from '../../ui/TabbedBox/TabbedBox';

export class LessonPlanList extends React.Component<ILessonPlanListProps, ILessonPlanListState> {
    constructor(props: ILessonPlanListProps) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        let plans = this.props.lessonPlans;
        let introTabs: TabbedBoxTabInfo[] = [];
        let warmupTabs: TabbedBoxTabInfo[] = [];
        let gameTabs: TabbedBoxTabInfo[] = [];

        if (plans != null) {
            // Add introductions
            for (var i = 0; i < plans.Introductions.length; i++) {
                introTabs.push({
                    tabLabel: plans.Introductions[i].Name,
                    tabContent: <div>{plans.Introductions[i].Description}</div> // Temporary way to display, will need to be a child component later
                });
            }

            // Add warm-ups
            for (var i = 0; i < plans.WarmUps.length; i++) {
                warmupTabs.push({
                    tabLabel: plans.WarmUps[i].Name,
                    tabContent: <div>{plans.WarmUps[i].Description}</div> // Temporary way to display, will need to be a child component later
                });
            }

            // Add games
            for (var i = 0; i < plans.Games.length; i++) {
                gameTabs.push({
                    tabLabel: plans.Games[i].Name,
                    tabContent: <div>{plans.Games[i].Description}</div> // Temporary way to display, will need to be a child component later
                });
            }
        }

        let mainStyles = {
            display: plans != null ? "block" : "none",
            transition: "all 2s linear"
        };

        return (
            <div style={mainStyles}>
                <h2>Introduction</h2>
                <TabbedBox tabInfo={introTabs} />
                <hr />

                <h2>Warm-ups</h2>
                <TabbedBox tabInfo={warmupTabs} />
                <hr />

                <h2>Games</h2>
                <TabbedBox tabInfo={gameTabs} />
                <hr />

                <div style={{ fontSize: 9 }}>{JSON.stringify(this.props.lessonPlans)}</div>
            </div>
        );
    }
}
