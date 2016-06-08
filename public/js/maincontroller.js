var $scope, $location;
var app = angular.module('example', ['google.places']);
// Setup a basic controller with a scope variable 'place'
app.controller('MainCtrl', function($filter, $http, $scope, $location, anchorSmoothScroll) {
    $scope.city = null;
    $scope.poisearch = 'GO!';
    $scope.hotelsearch = 'Find Hotels!';
    $scope.checkin = {
        value: new Date()
    };
    $scope.checkout = {
        value: new Date()
    };
    $scope.selectedPoiLatLong = {};
    $scope.poiresults = null;
    $scope.hotelresults = null;


    $scope.autocompleteOptions = {
        types: ['(cities)']
    }

    $scope.clickimg = function(event, activity) {
        var clickedobj = event.target;
        $(clickedobj).toggleClass("check");
        $(clickedobj).parent().find('span').toggleClass('glyphicon-ok');
        $(clickedobj).parent().parent().find('p').toggleClass('uline');
        if ($scope.selectedPoiLatLong.hasOwnProperty(activity['id'])) {
            delete $scope.selectedPoiLatLong[activity['id']];
        } else {
            $scope.selectedPoiLatLong[activity['id']] = activity['latLng'];
        }
    }

    $scope.getHotels = function() {
        var city = $scope.city
        var checkin = $scope.checkin
        var checkout = $scope.checkout
        if (city == null || checkin == null || checkout == null) {
            return;
        }
        $scope.hotelsearch = 'Finding Hotels';
        $scope.hotelresults = null;
        var selpoi = $scope.selectedPoiLatLong;
        var latlongstring = '';
        console.log(selpoi)
        for (var property in selpoi) {
            if (selpoi.hasOwnProperty(property)) {
              console.log(property)
              latlongstring=latlongstring+selpoi[property]+'|';
            }
            console.log(latlongstring);
        }
        console.log(latlongstring)
        latlongstring=latlongstring.slice(0,latlongstring.length-1);
        checkInDate = $filter('date')(checkin.value, "yyyy-MM-dd");
        checkOutDate = $filter('date')(checkout.value, "yyyy-MM-dd");

        var queryurl = '/hotelSearch/?city=' +
        city.formatted_address + '&latlonglist=' + latlongstring
        + '&checkin=' + checkInDate + '&checkout=' + checkOutDate;

        $http({
            method: 'GET',
            url: queryurl
        }).then(function successCallback(response) {
            $scope.hotelresults = response.data
            $scope.hotelsearch = 'Refresh Hotels!';
        }, function errorCallback(response) {
            console.log('error on hotels calls');
        });
    }

    $scope.getActivites = function() {
        var city = $scope.city
        var checkin = $scope.checkin
        var checkout = $scope.checkout
        if (city == null || checkin == null || checkout == null) {
            return;
        }
        $scope.poiresults = null;
        $scope.hotelresults = null;
        $scope.poisearch = 'Finding Activites...'
        cityLatLong = city.geometry.location.lat() + ',' + city.geometry.location.lng();
        ddate = $filter('date')(checkin.value, "yyyy-MM-dd");

        var queryurl = '/actsearch/' + city.formatted_address;
        $http({
            method: 'GET',
            url: queryurl
        }).then(function successCallback(response) {
            $scope.poiresults = response.data
            $scope.poisearch = 'Refresh Activites!';
        }, function errorCallback(response) {
          console.log('error on Activites');
        });
    };

});
