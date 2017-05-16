app.controller("ItemListCtrl", function($scope, ItemFactory) {
    $scope.items = [];


    ItemFactory.getItemList()
        .then((itemz) => {
            console.log("itemz", itemz);
            $scope.items = itemz;
        })
        .catch((error) => {
            console.log("error in get", error);
        });

});
