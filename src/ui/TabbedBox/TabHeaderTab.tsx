import * as React from 'react';

interface IProps {
    tabIndex: number;
    labelText: string;
    onTabClick: (index: number) => void;
}

interface IState { }

export class TabHeaderTab extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {};
    }

    handleTabClick(e: Event): void {
        e.preventDefault();
        this.props.onTabClick(this.props.tabIndex);
    }

    render(): JSX.Element {
        return (
            <a href="#" style={{ margin: "4px" }} onClick={this.handleTabClick.bind(this)}>
                {this.props.labelText}
            </a>
        );
    }
}
