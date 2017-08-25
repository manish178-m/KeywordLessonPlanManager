//////////////////////////////////////////////////////////////////////////////////////////////////////
// Since there are a lot of comments in this file, have a look at file "LessonPlannerTemplate.tsx"  //
// The comments make this file look a lot bigger and more complicated, but it's really not that bad //
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Import react stuff
import * as React from 'react';

/**
 * Import interfaces for this component
 * I have put these in a different file to make it easier to read.
 * I will use a folder for each component to keep the code structured nicely.
 */
import { ILessonPlannerProps, ILessonPlannerState } from './ILessonPlanner';

/**
 * Import Services this component will need to use and any acsociated interfaces/data types we want to use
 */
import { ILessonPlanMenu, ICourseMenuItem, IUnitMenuItem, ILessonMenuItem } from '../Services/ClientData/LessonPlanMenu';
import { LessonPlanMenuService } from '../Services/LessonPlanMenuService';

import { LessonPlanService } from '../Services/LessonPlanService';

/**
 * Import child components
 */
import { LessonPlannerLessonMenu } from './LessonPlannerLessonMenu';
import { LessonPlanList } from './LessonPlanList/LessonPlanList';

// Testing stuff imports
import { Collapsable } from '../ui/Collapsable/Collapsable';

/**
 * Each component, which can be thought of as any individual bit of html in your app
 * is a class which extends React.Component
 * React.Component accepts two interfaces, the props and state for this component
 */
export class LessonPlanner extends React.Component<ILessonPlannerProps, ILessonPlannerState> {
    /**
     * Constructor for this component class
     * The constructor for a react component accepts 1 parameter of the same type as the props interface
     */
    constructor(props: ILessonPlannerProps) {
        /**
         * With javascript when we extend another class, we always have to call "super()"
         * in the constructor. In this case, the parent class expects the props parameter.
         */
        super(props);

        /**
         * Set the initial value for the component state
         */
        this.state = {
            lessonMenu: null, // <- we will fetch this from the service, so we need to set it as null for now
            lessonPlans: null // <- set this to an null for now so that it is defined, but we don't see any data until we fetch some
        };
    }

    /**
     * render() is the only function that is required by a react component, however there are other functions you can use too.
     * These include:
     *      - componentWillMount()
     *      - componentDidMount()
     *      - componentWillUnmount()
     *      - componentDidUnmount()
     * In my experience so far I have only ever really used componentDidMount()
     * This function is used to gather any data from services or other sources that the component needs to use.
     * Typically you would call your data service, then set the result data into the component "state"
     */
    componentDidMount() {
        // Usually componentDidMount is the best place to make service calls, so here we will fetch the lesson menu and update the state
        let menuService = new LessonPlanMenuService();

        /**
         * Unlike ActionScript which is mostly event driven, the primary means of listening for data in JavaScript
         * is called "Promises". A function in some class somewhere can return a "promise" of a specific data type.
         * Basically saying "I promise that I will return this type of data at some point."
         * You can then listen for the result of this promise using "then()".
         * In this example "BuildMenu()" returns a promise for the ILessonPlanMenu interface. In the "then()" function
         * we can specify some callback code to run after we have the result of that promise. 
         */
        menuService.BuildMenu().then((result: ILessonPlanMenu) => {
            // this.setState is used to change or update specific values in the state.
            this.setState({
                lessonMenu: result
            });
        });
    }

    /**
     * This is the callback function passed into the lesson plan menu to handle when the user selects a lesson.
     * @param lessonId This ID of the lesson which is returned from the menu
     */
    handleLessonChosen(lessonId: number): void {
        if (lessonId == null) {
            // If null is passed in this means that we have selected a different item from the menu somewhere, so why not clear the lesson plans to save confusion
            this.setState({ lessonPlans: null });
        }
        else {
            // Otherwise we fetch the lesson plan data for the chosen lesson
            let lpService = new LessonPlanService();

            lpService.GetLessonPlan(lessonId).then((result) => {
                this.setState({
                    lessonPlans: result
                });
            });
        }
    }

    /**
     * The render function is where we write the html for this component
     * We can mix in javascript values by using the {handlebar} syntax
     * Since typescript gives javascript proper data types,
     * we can say that the render function returns a "JSX.Element" data type.
     */
    render(): JSX.Element {
        /**
         * We can do any logic we need just for rendering here
         * The we return the html for this component which will appear on the screen
         */
        return (
            // We can only return 1 top level html component here
            <div>
                <LessonPlannerLessonMenu menu={this.state.lessonMenu} onLessonChosen={this.handleLessonChosen.bind(this)} />

                <hr />

                <LessonPlanList lessonPlans={this.state.lessonPlans} />

                {/* TODO: Finish the javascript for this */}
                <Collapsable openDefault={false} title="Open me">
                    Here is some content!
                </Collapsable>
            </div>
        );
    }
}
