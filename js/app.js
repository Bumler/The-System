var theSystem = angular.module('theSystem', ['ngRoute']);

theSystem.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/main.html',
		controller: 'mainController'
	})
	// .when('/project',{
	// 	templateUrl: 'views/project.html',
	// 	controller: 'projectController'
	// })
	.otherwise({
		redirectTo: '/'
	});

}]);


theSystem.controller('mainController', function($scope){

});