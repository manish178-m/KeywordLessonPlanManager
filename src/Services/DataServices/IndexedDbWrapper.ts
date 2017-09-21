/**
 * Useful links
 *      - https://visualstudiomagazine.com/articles/2016/09/01/working-with-indexeddb.aspx
 *      - https://code.tutsplus.com/tutorials/working-with-indexeddb--net-34673
 *      - https://www.html5rocks.com/en/tutorials/webdatabase/websql-indexeddb/
 */

import { localDbConfig } from '../Config/LocalDatabase.config';

export class IndexedDbWrapper {
    private IndxDb: IDBFactory;
    public db: IDBDatabase;

    constructor() {
        this.IndxDb = window.indexedDB;
    }

    CheckIfDatabaseExists(): Promise<boolean> {
        return new Promise<boolean>((resolve: any, reject: any) => {
            var req: IDBOpenDBRequest;
            req = this.IndxDb.open(localDbConfig.DB_NAME);
            req.onupgradeneeded = (e: any) => {
                e.target.transaction.abort();
                // Delete the copy this will have just made ready to be recreated properly later
                this.IndxDb.deleteDatabase(localDbConfig.DB_NAME);
                resolve(false);
                return;
            };

            resolve(true);
        });
    }

    OpenInitDB() {
        var req: IDBOpenDBRequest;
        req = this.IndxDb.open(localDbConfig.DB_NAME);
        req.onupgradeneeded = this.AddTables;
        req.onsuccess = function (e: any) {
            //md.db = e.target.result;
        }
    }

    AddTables(e: any) {
        console.log(e);
    }
}
