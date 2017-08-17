/**
 * The LocalDataManager handles all communication between the server copy of the database and the locally stored version
 */
export class LocalDataManager {
    constructor() { }

    LocalCopyExists(): boolean {
        return false;
    }

    IsBrowserOnline(): boolean {
        return true;
    }
}
