var hive = angular.module('hive.controllers', []);


//Totally functioning simple login
hive.controller("LoginCtrl", function($scope, $firebaseAuth, $state){
var users = new Firebase("https://chattemplate.firebaseio.com/");

  $scope.register = function(username, password){
    users.createUser({
      email    : username,
      password : password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        users.authWithPassword({
          email: username,
          password: password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
        });
        $state.go('hive.chat');
      }
    });
  }
  
  $scope.login = function(username, password){
    users.authWithPassword({
      email    : username,
      password : password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        $state.go('hive.chat');
      }
    });
  }
  
  
  // we would probably save a profile when we register new users on our site
  // we could also read the profile to see if it's null
  // here we will just simulate this with an isNewUser boolean
  var isNewUser = true;
  
  var ref = new Firebase("https://chattemplate.firebaseio.com");
  ref.onAuth(function(authData) {
    if (authData && isNewUser) {
      // save the user's profile into the database so we can list users,
      // use them in Security and Firebase Rules, and show profiles
      ref.child("users").child(authData.uid).set({
        provider: authData.provider,
        name: getName(authData)
      });
    }
  });
  
  // find a suitable name based on the meta info given by each provider
  function getName(authData) {
    switch(authData.provider) {
      case 'password':
        return authData.password.email.replace(/@.*/, '');
      case 'twitter':
        return authData.twitter.displayName;
      case 'facebook':
        return authData.facebook.displayName;
    }
  }
  
  //Logout Functionality
  $scope.logout = function() {
    users.unauth();
    $state.go('hive.login');
  };
});



//Chats Page Controller
hive.controller('chatCtrl',function($scope, $firebaseArray, $state, $timeout){
	
  var ref = new Firebase("https://chattemplate.firebaseio.com/");
  var messagesRef = ref.child("messages");
  $scope.submitMessage = function(){

      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        messageDescription: $scope.messageDescription
      });
    
    //This resets the form to master which is null
    //Still need to apply some time of form reset
    //to the "Cancel" button, needs troubleshooting.
    $scope.master= null;
    
      $scope.reset = function() {
        $scope.messageDescription = angular.copy($scope.master);
        if ($scope.form) $scope.form.$setPristine();
      };
      $scope.reset();
	};
  
  var ratesRef = new Firebase('https://chattemplate.firebaseio.com/messages');
  
  ratesRef.on("value", function (snapshot) {
    $timeout(function () {
      update(snapshot);
      console.log(snapshot);
    });
  });
  
  function update (snapshot) {
    $scope.messages = snapshot.val();
  }
  
});