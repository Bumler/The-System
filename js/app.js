var theSystem = angular.module('theSystem', ['ngRoute']);

theSystem.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/main.html',
		controller: 'mainController'
	})
	.when('/traits',{
		templateUrl: 'views/traits.html',
		controller: 'traitsController'
	})
	.otherwise({
		redirectTo: '/'
	});

}]);


theSystem.controller('mainController', function($scope, $location){
	$scope.goToTraits = function(){
		$location.path('traits');
	}
});

theSystem.controller('traitsController', function($scope){

});