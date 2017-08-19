export interface IDatabaseItem<T> {
    GetAllFromDatabase(): T[];
    GetAllFromLocalData(): T[];
    DoesLocalNeedUpdating(): boolean;
}