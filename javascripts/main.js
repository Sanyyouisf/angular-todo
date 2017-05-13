app.run((FIREBASE_CONFIG) => { //
    firebase.initializeApp(FIREBASE_CONFIG);
});



app.controller("NavCtrl", ($scope) => { //name of the controller
    $scope.cat = "Meow";
    $scope.navItems = [{ name: "logout" }, { name: "All Item" }, { name: "New Item" }];
});

app.controller("ItemCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
    $scope.dog = "woof";
    $scope.showListView = true;
    $scope.items = [];


    $scope.newItem = () => {
        console.log("newItem");
        $scope.showListView = false;

    };

    $scope.allItems = () => {
        console.log("allItem");
        $scope.showListView = true;
    };

    let getItemList = () => {
      let itemz = [];
      return new $q((resolve, reject) => {
        $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
        .then((fbItems) => {
          var itemCollection = fbItems.data;
          Object.keys(itemCollection).forEach((key) => {
            itemCollection[key].id=key;
            itemz.push(itemCollection[key]);
          });
          resolve(itemz);
        })
        .catch((error) => {
          reject(error);
        });
      });
    };

    let getItems = () => {
      getItemList()
      .then((itemz) => {
        console.log("itemz", itemz);
        $scope.items=itemz;
      })
      .catch((error) => {
        console.log("error in get", error);
      });
    };

    getItems();











});
