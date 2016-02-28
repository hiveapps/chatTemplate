var hive = angular.module('hive.services', []);

//Messaging Service
hive.factory('messageService', function($firebaseArray) {
	var fb = new Firebase("https://chattemplate.firebaseio.com/messages");
	var messages = $firebaseArray(fb);
	var messageService= {
		all: messages,
		get: function(messageID) {
			return messages.$getRecord(messageID);
		}
	};
	return messageService;
});