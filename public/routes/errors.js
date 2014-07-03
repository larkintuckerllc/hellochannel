angular.module('myApp').config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/network-error', {
      	  		templateUrl: 'views/errors-network.html',
       			controller: 'NetworkErrorCtrl'
      		})
}]);
