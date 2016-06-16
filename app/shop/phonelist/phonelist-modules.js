angular.module('appPhone', ["ngRoute", "ngMessages"]).config(function ($routeProvider) {
    "use strict";

    $routeProvider
        .when("/phones/list", {
            templateUrl: "app/shop/phonelist/templates/phonelist.home.template.html",
            controllerAs: 'phoneListCtrl',
            controller: "PhoneListController"
        })
        .when("/phones/detail/:id", {
            templateUrl: "app/shop/phonelist/templates/phonelist.detail.template.html",
            controllerAs: 'phoneItemCtrl',
            controller: "PhoneItemController"
        })
        .when("/phones/edit/:id", {
            templateUrl: "app/shop/phonelist/templates/phonelist.edit.template.html",
            controllerAs: 'phoneEditCtrl',
            controller: "PhoneEditController"
        })
        .otherwise({
            redirectTo: '/phones/list'
        });
});