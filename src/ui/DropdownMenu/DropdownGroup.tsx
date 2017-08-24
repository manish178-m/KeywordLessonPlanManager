import * as React from 'react';

import { IDropdownGroupProps, IDropdownGroupState } from './IDropdownGroup';

export class DropdownGroup extends React.Component<IDropdownGroupProps, IDropdownGroupState> {
    render(): JSX.Element {
        return (
            <ul className="kw-dropdown-group">
                {this.props.children}
            </ul>
        );
    }
}
