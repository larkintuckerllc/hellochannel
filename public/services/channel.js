var module = angular.module('channelServices', []);

module.service('channel', ['$http', function($http) {
	var service = {
	};
	service.watch = function(success, error) {
		$http({method: 'GET', url: 'http://hello-channel.appspot.com/hellochannel?client_id=demo'}).
		success(function(data, status, headers, config) {
			var channel = new goog.appengine.Channel(data.token);
			var socket = channel.open();
			socket.onopen = function() {
			};
			socket.onmessage = function(message) {
				success();
			};
			socket.onerror = function(error) {
				error();
			};
			socket.close = function() {
			};
		}).
		error(function(data, status, headers, config) {
			error();
		}); 
	};
	service.post = function(success, error) {
		$http({method: 'GET', url: 'http://hello-channel.appspot.com/hellosend?client_id=demo&message=ping'}).
		success(function(data, status, headers, config) {
			success();
		}).
		error(function(data, status, headers, config) {
			error();
		}); 
	};
	return service;
}]);
