var errorsControllers = angular.module('errorsControllers', []);

errorsControllers.controller('NetworkErrorCtrl', ['$scope', '$window', function ($scope, $window) {
	$scope.reloadApplication = function() {
		$window.location.href = '/';
	}
}]);
