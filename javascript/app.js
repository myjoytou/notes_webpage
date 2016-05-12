app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html"
    })
    .state('js', {
      url: "/javascript/:name",
      templateUrl: function(stateParams) {
        return "templates/javascript/" + stateParams.name + ".html";
      }
    })
    .state('jquery', {
      url: "/jquery/:name",
      templateUrl: function(stateParams) {
        return "templates/jquery/" + stateParams.name + ".html";
      }
    });
}]);


app.controller('myCtrl', function($scope) {
  $scope.name = "vivek";
});
