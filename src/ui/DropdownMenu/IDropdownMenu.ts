export interface IDropdownMenuListItem {
    id: number;
    text: string;
}

export interface IDropdownMenuProps {
    listItems: IDropdownMenuListItem[];
    onChange: (id: number) => void;
}

export interface IDropdownMenuState {
    activeId: number;
}