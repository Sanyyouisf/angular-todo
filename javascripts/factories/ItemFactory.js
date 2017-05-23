app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG) {
    let getItemList = (userId) => {
        let itemz = [];
        return new $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json?orderBy="uid"&equalTo="${userId}"`)
                .then((fbItems) => {
                    let itemCollection = fbItems.data;
                    if (itemCollection !== null) {
                        Object.keys(itemCollection).forEach((key) => {
                            itemCollection[key].id = key;
                            itemz.push(itemCollection[key]);
                        });
                    }
                    resolve(itemz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    let getSingleItem = (id) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${id}.json`)
                .then((resultz) => {
                    resultz.data.id = id;
                    console.log("id in getSingleItem",id);
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    let postNewItem = (newItem) => {
        console.log("item",item);
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    let deletz = (itemId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };



    let editItem = (item) => {
        return $q((resolve, reject) => {
            //The JSON.stringify() method converts a JavaScript value to a JSON string, 
            $http.put(`${FIREBASE_CONFIG.databaseURL}/items/${item.Id}.json`, JSON.stringify({
                    assignedTo: item.assignedTo,
                    isCompleted: item.isCompleted,
                    task: item.task,
                    uid:item.id
                })).then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };





    return { getItemList: getItemList, getSingleItem: getSingleItem, postNewItem: postNewItem, deletz: deletz, editItem: editItem };
});
