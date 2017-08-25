import * as React from 'react';

// Import children required
import { TabHeaderSection } from './TabHeaderSection';
import { TabHeaderTab } from './TabHeaderTab';
import { TabBodyContent } from './TabBodyContent';


export interface TabbedBoxTabInfo {
    tabLabel: string;
    tabContent: JSX.Element;
}

interface IProps {
    tabInfo: TabbedBoxTabInfo[];
}

interface IState {
    activeTabIndex: number;
}

export class TabbedBox extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            activeTabIndex: 0
        };
    }

    handleChangeTab(newIndex: number) {
        this.setState({
            activeTabIndex: newIndex
        });
    }

    render(): JSX.Element {
        let { tabInfo } = this.props;
        let tabHeaders: JSX.Element[] = tabInfo.map((inf, ind) => {
            return (<TabHeaderTab key={ind} tabIndex={ind} onTabClick={this.handleChangeTab.bind(this)} labelText={inf.tabLabel} />);
        });
        let bodyContent = tabInfo[this.state.activeTabIndex] != null ? tabInfo[this.state.activeTabIndex].tabContent : "Here is the body content";

        return (
            <div>
                <TabHeaderSection>
                    {tabHeaders}
                </TabHeaderSection>

                <TabBodyContent>
                    {bodyContent}
                </TabBodyContent>
            </div>
        );
    }
}
