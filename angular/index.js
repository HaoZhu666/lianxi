angular.module('all',['all.computers','all.printers','all.blabla','ngRoute']).config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({redirectTo:'/'});
}])