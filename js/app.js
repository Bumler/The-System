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

theSystem.controller('traitsController', function($scope, $http){
	apiBaseURL = "https://92faaba5-bf69-4269-aac4-187f38b840b7.mock.pstmn.io";

	$scope.getTraits = function(){
		$http.get(apiBaseURL)
			.then(function (response) {
				$scope.traits = response.data;
			})
	}

	$scope.getTraits();
});