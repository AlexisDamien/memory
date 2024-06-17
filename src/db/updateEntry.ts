export function updateObject(db: IDBDatabase, storeName: string, id: number, updatedObject: any) {
    let transaction = db.transaction([storeName], 'readwrite');
    let store = transaction.objectStore(storeName);
    let request = store.get(id);

    request.onsuccess = function(event) {
        let object = (event.target as IDBRequest).result;

        // Update object fields
        for (let key in updatedObject) {
            if (updatedObject.hasOwnProperty(key)) {
                object[key] = updatedObject[key];
            }
        }

        let updateRequest = store.put(object);

        updateRequest.onsuccess = function() {
            console.log(`${storeName} object updated successfully`);
        };

        updateRequest.onerror = function(event) {
            console.error(`Error updating ${storeName} object: `, (event.target as IDBRequest).error);
        };
    };

    request.onerror = function(event) {
        console.error(`Error fetching ${storeName} object for update: `, (event.target as IDBRequest).error);
    };
}
