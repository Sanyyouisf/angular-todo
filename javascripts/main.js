var app = angular.module("TodoApp",[]);

app.controller("NavCtrl",($scope) => { //name of the controller
	$scope.cat=	"Meow";								
	$scope.navItems = [{name:"logout"},{name:"All Item"},{name:"New Item"}];
});

app.controller("ItemCtrl",($scope) =>{
	$scope.dog=	"woof";
	$scope.showListView = true;
	$scope.items = [
        {
          id: 0,
          task: "mow the lawn",
          isCompleted: true,
          assignedTo: "Callan",
        },
        {
          id: 1,
          task: "grade quizzes",
          isCompleted: false,
          assignedTo: "Lauren",
        },
        {
          id: 2,
          task: "take a nap",
          isCompleted: false,
          assignedTo: "Zoe",
        }
      ];



	$scope.newItem = () => {
		console.log("newItem");
		$scope.showListView = false;

	};

	$scope.allItems = () => {
		console.log("allItem");
		$scope.showListView = true;
	};



});

