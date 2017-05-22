app.controller("ItemEditCtrl",function($location,$routeParams,$scope,ItemFactory){
    //The $routeParams is a service allows you to retrieve the current set of route parameters.
    console.log("inside ItemEditCtrl ");
    $scope.newTask ={};
    ItemFactory.getSingleItem($routeParams.id)
    .then((results)=>{
        console.log("results inside ItemEditCtrl is ",results);
    	 $scope.newTask=results.data;
    }).catch((error)=>{
    	console.log("error",error);
    });

    $scope.addNewItem=()=>{
    ItemFactory.editItem($scope.newTask).then(()=>{
    	$location.url('items/list');
    }).catch((error)=>{
    	console.log(" edit item error",error);
    });	
    };
});