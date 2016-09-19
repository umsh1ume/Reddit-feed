(function()
{
var app=angular.module('feed', ['ionic']);
app.controller('FeedCtrl',function($http,$scope)
{

  $scope.stories=[];

  $http.get('https://www.reddit.com/r/Jokes/new/.json').success(function(aya)
  {
    angular.forEach(aya.data.children,function(childd)
    {
        console.log(childd.data);
        $scope.stories.push(childd.data);
    });
  });


});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
}());
