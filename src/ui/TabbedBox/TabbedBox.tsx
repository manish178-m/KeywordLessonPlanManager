import * as React from 'react';

// Import children required
import { TabHeaderSection } from './TabHeaderSection';
import { TabHeaderTab } from './TabHeaderTab';
import { TabBodyContent } from './TabBodyContent';

interface IProps { }

interface IState { }

export class TabbedBox extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div>
                Hello
            </div>
        );
    }
}
