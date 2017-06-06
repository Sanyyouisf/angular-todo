app.controller("AuthCtrl", function($rootScope, $location,$scope, AuthFactory, UserFactory) {
    console.log("inside AuthCtrl ");
    $scope.alerts=[];
    $scope.auth = {
    	email:"s@s.com",
    	password:"111111"
    };

    $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

    let LogMeIn=()=>{
    	AuthFactory.authenticate($scope.auth)
    	.then((usercreds)=>{
    		console.log("usercred",usercreds);
    		return UserFactory.getUser(usercreds.uid);
    	}).then((user)=>{
    		console.log("user",user);
    		$rootScope.user = user;
    		$location.url('items/list');
    	}).catch((error)=>{
    		$scope.alerts.push({msg: error.message});
    		console.log("getUser error", error );
    	});
    };

    if ($location.path()==='/logout'){
    	AuthFactory.logout();
    	$rootScope.user={};
    	$location.url('/auth');
    }


    $scope.registerUser = () => {    	
    	AuthFactory.registerWithEmail($scope.auth)
    	.then((didRegister)=>{
    		console.log("you registered ", didRegister);
    		$scope.auth.uid = didRegister.uid;
    		return UserFactory.addUser($scope.auth);
    		// console.log("$scope.auth inside registerUser",$scope.auth);
    	}, (error) => {
    		console.log("error in registerWithEmail",error);
    	}).then((registerComplete)=>{
    		console.log("registerComplete",registerComplete);
    		LogMeIn();
    	}).catch((error)=>{
    		console.log("error",error);
    	});
    	//adding user name
    	//log in 

    };

    $scope.loginUser = () => {
    	LogMeIn();
    };

});
