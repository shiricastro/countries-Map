var app = angular.module("appCountries",['ngMap']);
app.controller("mainCtrl", mainCtrl);

function mainCtrl($http){
    this.countrySelect = {};
    this.countrySelect.name= "Israel";
   
    this.data=[];  
    $http({
            url: 'countries.json', 
            method: "GET"
    }).then(function (response) {           
            this.data = response.data;
    }.bind(this));
    

    this.chosenCode ="il";
    this.chosenCountry = function(){
        this.chosenCode = this.data.find(function(c){
           return c.name === this.countrySelect.name; 
        }.bind(this)).code;
    };
     
      
};


