export interface IDropdownMenuListItem {
    id: number;
    text: string;
}

export interface IDropdownMenuProps {
    listItems: IDropdownMenuListItem[];
    onChange: (id: number) => void;
    inactiveText: string;
    disabledText: string;
    disabled: boolean;
    activeId: number;
}

export interface IDropdownMenuState {
    dropdownVisible: boolean;
}
