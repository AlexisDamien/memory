export function openDatabase(dbName: string, version: number, storeSchemas: any[], onSuccess: (db: IDBDatabase) => void) {
    let openRequest = indexedDB.open(dbName, version);

    openRequest.onupgradeneeded = function(event) {
        let db = (event.target as IDBOpenDBRequest).result;

        storeSchemas.forEach(schema => {
            if (!db.objectStoreNames.contains(schema.name)) {
                let objectStore = db.createObjectStore(schema.name, schema.options);
                if (schema.indices) {
                    schema.indices.forEach(index => {
                        objectStore.createIndex(index.name, index.keyPath, index.options);
                    });
                }
            }
        });
    };

    openRequest.onsuccess = function(event) {
        let db = (event.target as IDBOpenDBRequest).result;

        db.onversionchange = function() {
            db.close();
            alert("Database is outdated, please reload the page.");
        };

        onSuccess(db);
    };

    openRequest.onerror = function(event) {
        console.error("Database error: ", (event.target as IDBOpenDBRequest).error);
    };
}
