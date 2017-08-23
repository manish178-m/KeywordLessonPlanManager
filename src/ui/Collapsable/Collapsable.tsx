import * as React from 'react';

import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { ICollapsableProps, ICollapsableState } from './ICollapsable';

export class Collapsable extends React.Component<ICollapsableProps, ICollapsableState> {
    constructor(props: ICollapsableProps) {
        super(props);

        this.state = {
            isOpen: this.props.openDefault || false
        };
    }

    handleToggleCollapse() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(): JSX.Element {
        return (
            <div>
                <div>
                    {this.props.title} - <a href="#" onClick={this.handleToggleCollapse.bind(this)}>{this.state.isOpen ? "Collapse" : "Expand"}</a>
                </div>

                {/* <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={2000}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={1000}
                >
                    <div key="fadeable">
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup> */}
            </div>
        );
    }
}