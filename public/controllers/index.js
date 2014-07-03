var indexControllers = angular.module('indexControllers', []);

indexControllers.controller('IndexHomeCtrl', ['$scope', 'navigator', 'channel', function ($scope, navigator, channel) {
	$scope.menuOpen = false;
	$scope.navigate = navigator.navigate;
	$scope.toggleMenu = function() {
		$scope.menuOpen = ! $scope.menuOpen;
	}
	$scope.pings = [];
	$scope.post = function() {
		channel.post(
			function() {
				// SUCCESS
			},
			function() {
				// ERROR
				navigator.navigate('/network-error');
			}
		);
	};
	channel.watch( 
		function() {
			// SUCCESS
			$scope.pings.push({});
			$scope.$apply();
		},
		function() {
			// ERROR
			navigator.navigate('/network-error');
		}
	);
}]);
