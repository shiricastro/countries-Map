var app = angular.module("appCountries",[]);
app.controller("mainCtrl", mainCtrl);

function mainCtrl($http){
    this.data={};
    this.data.ajax=null;
    
	$http({
		url: 'countries.json', 
		method: "GET"
	}).then(function (response) {
		console.log(response.data);
		this.data.ajax = response.data;
	}.bind(this));    
    
}



//http://www.geonames.org/flags/m/
//http://www.geonames.org/flags/m/ag.png