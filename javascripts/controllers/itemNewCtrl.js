app.controller("ItemNewCtrl", function($http, $q, $scope, FIREBASE_CONFIG) {


    $scope.addNewItem = () => {
        postNewItem($scope.newTask).then((response) => {
            $scope.newTask = {};
         //switch views
        }).catch((error) => {
            console.log("add error", error);
        });

    };
});
