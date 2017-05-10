var app = angular.module("TodoApp",[]);

app.controller("NavCtrl",($scope) => { //name of the controller
	$scope.cat=	"Meow";								
	$scope.navItems = [{name:"logout"},{name:"All Item"},{name:"New Item"}];
});

app.controller("ItemCtrl",($scope) =>{
	$scope.dog=	"woof";	

});

