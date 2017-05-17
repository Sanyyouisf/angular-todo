app.controller("ItemListCtrl", function($scope, ItemFactory) {
    $scope.items = [];

    let getItems = () => {
        ItemFactory.getItemList()
            .then((itemz) => {
                console.log("itemz", itemz);
                $scope.items = itemz;
            })
            .catch((error) => {
                console.log("error in get", error);
            });
    };

    getItems();

    $scope.deleteItem = (id) => {
        ItemFactory.deletz(id).then(() => {
        	getItems();
        }).catch((error) => {
            console.log("deletItem error", error);
        });
    };

});
