var myApp = angular.module('myApp', [
	'ngRoute',
	'blockUI',
	'navigatorServices',
	'channelServices',
	'errorsControllers',
	'indexControllers'
])
.config(function(blockUIConfigProvider) {
	blockUIConfigProvider.autoBlock(false);
});
