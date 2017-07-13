var app = angular.module("appCountries",['ngMap']);
app.controller("mainCtrl", mainCtrl);

function mainCtrl($http,NgMap){
    this.data={};
    this.data.ajax=null;
   

    $http({
            url: 'countries.json', 
            method: "GET"
    }).then(function (response) {
            
            this.data.ajax = response.data;
    }.bind(this)); 
    this.countrySelect = "il";
     
    this.NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
      });
      
};



//http://www.geonames.org/flags/m/
//http://www.geonames.org/flags/m/ag.png