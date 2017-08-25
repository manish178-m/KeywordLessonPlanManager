import * as React from 'react';

interface IProps { }

interface IState { }

export class TabBodyContent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div>
                Tab Body
            </div>
        );
    }
}
