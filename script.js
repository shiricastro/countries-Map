var app = angular.module("appCountries",[]);
app.controller("mainCtrl", mainCtrl);

function mainCtrl($http){
    this.data={};
    this.data.ajax=null;
   

    $http({
            url: 'countries.json', 
            method: "GET"
    }).then(function (response) {
            
            this.data.ajax = response.data;
    }.bind(this)); 
    this.countrySelect = "il";

};



//http://www.geonames.org/flags/m/
//http://www.geonames.org/flags/m/ag.png