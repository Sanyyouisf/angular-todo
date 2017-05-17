app.controller("ItemEditCtrl",function($location,$routeParams,$scope,ItemFactory){
    console.log("iside ItemEditCtrl ");
    $scope.newTask ={};
    ItemFactory.getSingleItem($routeParams.id).then((results)=>{
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