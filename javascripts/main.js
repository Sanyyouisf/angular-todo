app.controller("ItemCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
    //we use $q instead of rpomise 
    //and we use $http instead of ajax 

    let postNewItem = (newItem) => {
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

    $scope.addNewItem = () => {
        postNewItem($scope.newTask).then((response) => {
            $scope.newTask = {};
            getItems();
        }).catch((error) => {
            console.log("add error", error);
        });

    };








});