import { LocalDataManager } from './DataServices/LocalDataManager';

export class DatabaseDownloadManager {
    CheckAndCreateLocalDatabaseExists() {
        if (LocalDataManager.LocalCopyExists) {
            LocalDataManager.DownloadDatabase().then((database) => {
                LocalDataManager.CloneFullDatabase(database).then((result) => {
                    console.log(result);
                });
            });
        }
    }
}
