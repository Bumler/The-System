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
	$scope.addingTrait = false;

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

	$scope.addTrait = function(){
		var newTrait = new Object();
		newTrait.Name = $scope.newTraitForm.ntName.$viewValue;
		newTrait.ActionType = $scope.newTraitForm.ntActionType.$viewValue;
		newTrait.Points = $scope.newTraitForm.ntPoints.$viewValue;
		newTrait.Description = $scope.newTraitForm.ntDescription.$viewValue;
		newTrait.Cooldown = $scope.newTraitForm.ntCooldown.$viewValue;
		newTrait.CooldownUnit = $scope.newTraitForm.ntCooldownUnit.$viewValue;

		debugger;
		//POST HERE
		//ON SUCCESS
		$scope.getTraits();
		$scope.addingTrait = false;
		//todo finish the reset form ng-if wont work for some reason
		$scope.newTraitForm.$setPristine(true);
	}

	$scope.getTraits();
});