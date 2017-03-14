/* setup your angular app here */
var app = angular.module("fnv", []);

app.controller("MainCtrl", ["$scope", function($scope){
    $scope.both = vegetables.concat(fruits);

    $scope.vegPool = [];
    $scope.fruitPool = [];

    function winCondition(){
       for(var i=0; i< $scope.fruitPool.length; i++){
           if(fruits.indexOf($scope.fruitPool[i]) < 0){
               console.log('wrong fruit! ' + $scope.fruitPool[i]);
           }else{
               console.log('correct fruit! '+ $scope.fruitPool[i])
           }
       }
       for(var i=0; i< $scope.vegPool.length; i++){
           if(vegetables.indexOf($scope.vegPool[i]) < 0){
               console.log('wrong vegetable! ' + $scope.vegPool[i]);
           }else{
               console.log('correct vegetable! '+ $scope.vegPool[i])
           }
       }
    }

    $scope.veg = function(){
        $scope.vegPool.push($scope.both[this.$index]);
        $scope.both.splice(this.$index, 1);
        if($scope.both.length == 0){
            winCondition();
        }
    }
    $scope.fruit = function(){
        $scope.fruitPool.push($scope.both[this.$index]);
        $scope.both.splice(this.$index, 1)
        if($scope.both.length == 0){
            winCondition();
        }
    }
    $scope.poolVeg = function(){
        $scope.both.push($scope.vegPool[this.$index]);
        $scope.vegPool.splice(this.$index, 1);
    }
    $scope.poolFruit = function(){
        $scope.both.push($scope.fruitPool[this.$index]);
        $scope.fruitPool.splice(this.$index, 1);
    }
}])