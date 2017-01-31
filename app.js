//var key = "DC0sePOBbQ8bYdC8r4Smg"

//Connect to twitter
//Get search term
//Use search term in search
//Display tweets

var myWiki = angular.module('Twapp',[]);
myWiki.controller('TweetyCtrl', function($scope, $http){
  $scope.fart = 'rabbit';

  var key = 'qV5AsSnMTIVuywvq60iHI5Ilt';
  var secret = 'urrV7rPHk6yoOzy2f0tQWQzfQZz9nLjdiMcXaTe3I3OCCHiAs8';
  var token = '77668395-g5Hzp0vHxiCbtGcPmAVlGb3N1o7it4zgWbvt766Rb';
  var tokret = 'zCRItnnpoOuwkcfadKsFUQQBKzONqkY4rEDDaAtFcteLh';

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
