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

theSystem.controller('traitsController', function($scope, $http, $location){
	apiBaseURL = "https://92faaba5-bf69-4269-aac4-187f38b840b7.mock.pstmn.io";

	$scope.goToMain = function(){
		$location.path('/');
	}

	$scope.getTraits = function(){
		$http.get(apiBaseURL)
			.then(function (response) {
				populateTraitsList(response.data);
			})
	}

	function populateTraitsList(traitList){
		$scope.traits = [[],[],[]];

		for (i = 0; i < traitList.length; i++)
			$scope.traits[i%3].push(traitList[i]);
	}

	$scope.getTraits();
});