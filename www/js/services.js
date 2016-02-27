var hive = angular.module('hive.services', []);

//Post Service
hive.factory('postService', function($firebaseArray) {
	var fb = new Firebase("https://10minute.firebaseio.com/posts");
	var posts = $firebaseArray(fb);
	var postService= {
		all: posts,
		get: function(postID) {
			return posts.$getRecord(postID);
		}
	};
	return postService;
});

//Messaging Service
hive.factory('messageService', function($firebaseArray) {
	var fb = new Firebase("https://10minute.firebaseio.com/messages");
	var messages = $firebaseArray(fb);
	var messageService= {
		all: messages,
		get: function(messageID) {
			return messages.$getRecord(messageID);
		}
	};
	return messageService;
});