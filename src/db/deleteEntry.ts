export function deleteObject(db: IDBDatabase, storeName: string, id: number) {
    let transaction = db.transaction([storeName], 'readwrite');
    let store = transaction.objectStore(storeName);
    let request = store.delete(id);

    request.onsuccess = function() {
        console.log(`${storeName} object deleted successfully`);
    };

    request.onerror = function(event) {
        console.error(`Error deleting ${storeName} object: `, (event.target as IDBRequest).error);
    };
}
