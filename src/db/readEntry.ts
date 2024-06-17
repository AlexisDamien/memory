export function getAllObjects(db: IDBDatabase, storeName: string) {
    let transaction = db.transaction([storeName], 'readonly');
    let store = transaction.objectStore(storeName);
    let request = store.getAll();

    request.onsuccess = function(event) {
        console.log(`${storeName} objects: `, (event.target as IDBRequest).result);
    };

    request.onerror = function(event) {
        console.error(`Error fetching ${storeName} objects: `, (event.target as IDBRequest).error);
    };
}
