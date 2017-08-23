import * as React from 'react';

import { IDropdownMenuProps, IDropdownMenuState } from './IDropdownMenu';

export class DropdownMenu extends React.Component<IDropdownMenuProps, IDropdownMenuState> {
    constructor(props: IDropdownMenuProps) {
        super(props);
    }

    handleItemSelected(id: number): void {
        console.log("Selected: " + id);
        this.props.onChange(id);
    }

    render(): JSX.Element {
        let itemsDisplay: JSX.Element[] = this.props.listItems != null ? this.props.listItems.map((item) => {
            return (
                <div key={item.id}>
                    <a href="#" onClick={this.handleItemSelected.bind(this, item.id)}>{item.text}</a>
                </div>
            );
        }) : null;

        let chosenDisplayText = this.props.activeId != null ?
            this.props.listItems[this.props.listItems.map((l) => { return l.id }).indexOf(this.props.activeId)].text :
            this.props.inactiveText;

        // Override display text if disabled. Disable takes priority over no active selection
        chosenDisplayText = this.props.disabled ? this.props.disabledText : chosenDisplayText;

        return (
            <div className="kw-dropdown" style={{ border: "2px solid #666" }}>
                <div className="kw-dropdown-chosen">
                    {chosenDisplayText}
                </div>

                {itemsDisplay}
            </div>
        );
    }
}
