app.controller("NavCtrl", ($scope) => { //name of the controller
    $scope.cat = "Meow";
    $scope.navItems = [{ name: "logout" }, { name: "All Item" }, { name: "New Item" }];
});