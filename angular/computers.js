angular.module('all.computers',['ngRoute']).config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/computer',{template:'./computers.html'})
}])