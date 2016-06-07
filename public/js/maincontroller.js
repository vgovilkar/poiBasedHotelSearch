var $scope, $location;
var app = angular.module('example', ['google.places']);
// Setup a basic controller with a scope variable 'place'
app.controller('MainCtrl', function ($filter, $http, $scope, $location, anchorSmoothScroll) {
  $scope.city = null;
  $scope.search = 'GO!';
  $scope.checkin = {value: new Date()};
  $scope.checkout = {value: new Date()};

  $scope.poiresults = null;

  $scope.autocompleteOptions = {
    types: ['(cities)']
  }

  $scope.clickimg = function(event) {
    var clickedobj = event.target;
    $(clickedobj).toggleClass("check");
    $(clickedobj).parent().find('span').toggleClass('glyphicon-ok');
  }

  $scope.searchnow = function() {
    $scope.search = 'Finding Activites...'
    var city = $scope.city
    var checkin = $scope.checkin
    var checkout = $scope.checkout

    if(city == null || checkin == null || checkout==null) {
      return;
    }
    cityLatLong = city.geometry.location.lat() + ',' + city.geometry.location.lng();
    ddate = $filter('date')(checkin.value, "yyyy-MM-dd");

    var queryurl = '/actsearch?cityLatLong=' + cityLatLong ;

    console.log(queryurl)

    $http({
      method: 'GET',
      url: queryurl
    }).then(function successCallback(response) {
        $scope.poiresults = response.data
        $scope.search = 'GO!';
        anchorSmoothScroll.scrollTo('bottom');
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  };

});
