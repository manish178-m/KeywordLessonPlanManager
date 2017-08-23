import * as React from 'react';

import { IDropdownMenuProps, IDropdownMenuState } from './IDropdownMenu';

export class DropdownMenu extends React.Component<IDropdownMenuProps, IDropdownMenuState> {
    constructor(props: IDropdownMenuProps) {
        super(props);

        this.state = { dropdownVisible: false };
    }

    handleItemSelected(id: number): void {
        console.log("Selected: " + id);
        this.setState({ dropdownVisible: false });
        this.props.onChange(id);
    }

    handleDropdownVisibleToggle() {
        if (!this.props.disabled)
            this.setState({ dropdownVisible: !this.state.dropdownVisible });
    }

    render(): JSX.Element {
        let itemsDisplay: JSX.Element[] = this.props.listItems != null ? this.props.listItems.map((item) => {
            return (
                <div key={item.id}>
                    <a href="#" onClick={this.handleItemSelected.bind(this, item.id)}>{item.text}</a>
                </div>
            );
        }) : null;

        // Decide what the title of this dropdown should say depending on current state
        let chosenDisplayText = this.props.activeId != null ?
            this.props.listItems[this.props.listItems.map((l) => { return l.id }).indexOf(this.props.activeId)].text :
            this.props.inactiveText;

        // Override display text if disabled. Disable takes priority over no active selection
        chosenDisplayText = this.props.disabled ? this.props.disabledText : chosenDisplayText;

        // Setup styles for dropdown bit
        let dropdownClasses: string = this.state.dropdownVisible ? "kw-dropdown-options visible" : "kw-dropdown-options";
        let dropdownSelectorClasses: string = this.props.disabled ? "kw-dropdown-chosen" : "kw-dropdown-chosen enabled";

        return (
            <div className="kw-dropdown">
                <div className={dropdownSelectorClasses} onClick={this.handleDropdownVisibleToggle.bind(this)}>
                    {chosenDisplayText}
                </div>

                <div className={dropdownClasses}>
                    {itemsDisplay}
                </div>
            </div>
        );
    }
}
