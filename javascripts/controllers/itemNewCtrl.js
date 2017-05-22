app.controller("ItemNewCtrl", function($http, $q, $scope,$location, FIREBASE_CONFIG,ItemFactory) {


    $scope.addNewItem = () => {
    	$scope.newTask.isCompleted= false;
        ItemFactory.postNewItem($scope.newTask).then((response) => {
            $scope.newTask = {};
            $location.url("items/list");
         //switch views
        }).catch((error) => {
            console.log("add error", error);
        });

    };
});
