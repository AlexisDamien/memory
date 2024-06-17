export function addObject(db: IDBDatabase, storeName: string, object: any) {
    let transaction = db.transaction([storeName], 'readwrite');
    let store = transaction.objectStore(storeName);
    let request = store.add(object);

    request.onsuccess = function() {
        console.log(`${storeName} object added successfully`);
    };

    request.onerror = function(event) {
        console.error(`Error adding ${storeName} object: `, (event.target as IDBRequest).error);
    };
}
