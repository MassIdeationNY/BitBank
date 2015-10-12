var app = angular.module("TemplateApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  
  console.log("TemplateApp");
  
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).
    when('/rates', {
      templateUrl: 'partials/rates.html',
      controller: 'RatesController'
    }).
    when('/send', {
      templateUrl: 'partials/send.html',
      controller: 'TransactionController'
    }).
    when('/receive', {
      templateUrl: 'partials/receive.html',
      controller: 'TransactionController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);//end route provider

app.controller("HomeController", function($scope,  $http, $location ){
  console.log("HomeController");

  var unitArray = [];
  //
  // cooper s - for when we need data
 // $http.get("https://api.coinkite.com/public/rates").then(function(r){
  //$http.get("http://harlemreservations-campaigner.rhcloud.com/unit").then(function(r){
  //$http.get("http://127.0.0.1:8080/unit/").then(function(r){
  //  console.log("Did we get rate data: ", r );
  //});//end http get 

   $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };

})
.directive('helloWorld', function(){
  //console.log("hello world directive...");
  return {
    template: 'Bitcoin Rules'
  }
});//end home controller/directive

//cooper s - Rate Page 
app.controller("RatesController", function($scope,  $http, $location ){
   console.log("RatesController");
  $http.get("https://api.coinkite.com/public/rates").then(function(r){
    console.log("Did we get rate data: ", r.data.rates.BTC.AUD.pretty );
    $scope.rateData = r.data.rates.BTC;
  });//end http get 

   $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };
});//end rates controller

//cooper s - Send and Receive Pages 
app.controller("TransactionController", function($scope,  $http, $location ){
   console.log("TransactionController");

   $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };
});//end rates controller