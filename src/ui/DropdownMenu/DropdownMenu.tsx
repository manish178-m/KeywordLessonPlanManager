import * as React from 'react';

import { IDropdownMenuProps, IDropdownMenuState } from './IDropdownMenu';

export class DropdownMenu extends React.Component<IDropdownMenuProps, IDropdownMenuState> {
    constructor(props: IDropdownMenuProps) {
        super(props);

        this.state = {
            activeId: null
        };
    }
}
