angular.module("salono", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
	.state("Home", {
		url: "/",
		templateUrl: "./HomeTmpl.html",
		controller: "mainCtrl"
	})

	//#Routes
	.state("Products", {
		url:"/Products",
		templateUrl: "./ProductsRoute/ProductsTmpl.html",
		controller: "ProductsCtrl"
	})
 
	.state("Team", {
		url:"/Team",
		templateUrl: "./TeamRoute/TeamTmpl.html",
//		controller: "TeamCtrl"
	})
 
	.state("Services", {
		url:"/Services",
		templateUrl: "./ServicesRoute/ServicesTmpl.html",
		controller: "ServicesCtrl"
	})
 
	.state("Appointments", {
		url:"/Appointments",
		templateUrl: "./AppointmentsRoute/AppointmentsTmpl.html",
//		controller: "AppointmentsCtrl"
	})
 
	.state("About", {
		url:"/About",
		templateUrl: "./AboutRoute/AboutTmpl.html",
//		controller: "AboutCtrl"
	})
 


	$urlRouterProvider.otherwise("/");

 });
