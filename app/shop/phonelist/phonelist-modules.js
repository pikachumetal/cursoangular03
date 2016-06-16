angular.module('appPhone',["ngRoute","ngMessages"]).config(function ($routeProvider) {
    "use strict";
    
    $routeProvider
        .when("/phones/list", {
            templateUrl: "app/shop/phonelist/templates/phonelist.home.template.html",
            controller: "PhoneListController"
        })
        .when("/phones/detail/:id", {
            templateUrl: "app/shop/phonelist/templates/phonelist.detail.template.html",
            controller: "PhoneItemController"
        })
        .when("/phones/edit/:id", {
            templateUrl: "app/shop/phonelist/templates/phonelist.edit.template.html",
            controller: "PhoneEditController"
        })
        .otherwise({
            redirectTo: '/phones/list'
        });
});