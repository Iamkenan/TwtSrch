//var key = "DC0sePOBbQ8bYdC8r4Smg"

//Connect to twitter
//Get search term
//Use search term in search
//Display tweets

var myWiki = angular.module('Twapp',[]);
myWiki.controller('TweetyCtrl', function($scope, $http){
  $scope.fart = 'rabbit';

  var key = '';
  var secret = '';
  var token = '';
  var tokret = '';

  $scope.searchit = function(){

    var params = {
      q:$scope.searchword
    }

    $http.get
  };
/*
  $scope.searchit = function(){
    $http.jsonp('https://api.twitter.com/1/statuses/user_timeline/twbootstrap.json?callback=JSON_CALLBACK?&count=10')
    .then(function(data){
      $scope.response = data;
      console.log(data);
    });
  };*/
});
