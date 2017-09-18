/**
 * The LocalDataManager handles all communication between the server copy of the database and the locally stored version
 */
export class LocalDataManager {
    constructor() { }

    static LocalCopyExists(): boolean {
        return false;
    }

    static DownloadDatabase(): Promise<any> {
        return new Promise<boolean>((resolve, reject) => {
            // Do some stuff
            resolve({ data: [] } as any);
        });
    }

    static CreateDatabaseStructure(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // Do some stuff
            resolve(true);
        });
    }

    static CloneFullDatabase(database: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // Do some stuff
            resolve(true);
        });
    }

    static IsBrowserOnline(): boolean {
        return true;
    }
}
