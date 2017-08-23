export interface ICollapsableProps {
    title: string | JSX.Element;
    openDefault: boolean;
}

export interface ICollapsableState {
    isOpen: boolean;
}