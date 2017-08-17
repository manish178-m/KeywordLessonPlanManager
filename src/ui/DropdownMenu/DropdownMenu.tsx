import * as React from 'react';

import { IDropdownMenuProps, IDropdownMenuState } from './IDropdownMenu';

export class DropdownMenu extends React.Component<IDropdownMenuProps, IDropdownMenuState> {
    constructor(props: IDropdownMenuProps) {
        super(props);

        this.state = {
            activeId: null
        };
    }

    render(): JSX.Element {
        let itemsDisplay: JSX.Element[] = this.props.listItems.map((item) => {
            return (<span key={item.id}>{item.text}</span>);
        });

        return (
            <div className="kw-dropdown">
                {itemsDisplay}
            </div>
        );
    }
}
