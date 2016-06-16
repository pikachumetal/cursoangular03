angular.module('appPhone').directive("phoneList", function () {
    return {
        restrict: "EA",
        replace: 'true',
        templateUrl: "app/shop/phonelist/templates/phonelist.list.template.html",
        //scope: false,
        scope: {
            phones: '=',
            seeimage: '=',
            direccion: '=',
            queryselector: '=',
            query: '=',
            deletePhone: '&'
        },
    };
});

angular.module('appPhone').directive("phoneSearch", function () {
    return {
        restrict: "EA",
        replace: 'true',
        templateUrl: "app/shop/phonelist/templates/phonelist.search.template.html",
        scope: {
            queryselectorLabels: '=',
            seeimageLabels: '=',
            seeimage: '=',
            direccion: '=',
            queryselector: '=',
            query: '=',
            reloadjson: '&'
        },
    };
});