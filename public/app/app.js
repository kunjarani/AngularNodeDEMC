//Module
var angularTest = angular.module("angularTest",[]);

// Services
angularTest.service("mainService", function($http){
    var self = this;   
   //getData
   self.getData = function(){ 
      return $http.get("/api/user");
   };
   //SaveData
   self.saveData = function(user){
      return $http.post("/api/saveUser",user);
   }
})

// Controllers
angularTest.controller("mainController",["$scope","$log","mainService",function($scope,$log,mainService){
   $scope.user = [];


    //OnLoad getdata    
   mainService.getData().then(function successCallback(result){
       $scope.user = result.data;
       $scope.userObject = $scope.user[$scope.user.length - 1] || {};
   },function errorCallback(error,status){
      $log.log("Error",error , "Status",status);
      $scope.user = [];
      $scope.userObject = {};
   });


   //function to validate the Inputs and disable the button      
   $scope.validateValue = function(userform){
      $scope.userObject.multiply = "";
   if(
      $scope.userObject.num1 < 0 ||
      $scope.userObject.num2 < 0 ||
      userform.Input1.$error.pattern ||
      userform.Input2.$error.pattern ||
      userform.$invalid){
         $scope.disableButton = true; 
   } else{
      $scope.disableButton = false;
   }  
   } 


 // function to calculate the form after all validation has occurred            
 $scope.calculateForm = function(isValid, userObject) {

  // check to make sure the form is completely valid
  if (isValid) {
    $scope.userObject.multiply = $scope.userObject.num1 * $scope.userObject.num2;
    $scope.userObject.id = $scope.user.length;
    mainService.saveData($scope.userObject).then(function successCallback(result){
      return result;
   },function errorCallback(error,status){
      $log.log("Error",error , "Status",status);
   });

  }

};

}])


//Directives
angularTest.directive("multiplyDirective",function(){
   return{
           restrict:'E',
           template: '<p>Multiply:{{userObject.multiply}}</p>',
           replace: true

   }



})