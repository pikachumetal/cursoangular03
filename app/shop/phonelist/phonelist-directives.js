

angular.module('appPhone').component("phoneListDir", {
    templateUrl: "app/shop/phonelist/templates/phonelist.list.template.html",
    bindings: {
        phones: '=',
        seeimage: '<',
        direccion: '<',
        queryselector: '<',
        query: '<',
        deletePhone: '&'
    }
});

angular.module('appPhone').component("phoneSearchDir", {
    templateUrl: "app/shop/phonelist/templates/phonelist.search.template.html",
    bindings: {
        queryselectorLabels: '<',
        seeimageLabels: '<',
        seeimage: '=',
        direccion: '=',
        queryselector: '=',
        query: '=',
        reloadjson: '&'
    }
});

// angular.module('appPhone').directive("phoneList", function () {
//     return {
//         restrict: "EA",
//         replace: 'true',
//         templateUrl: "app/shop/phonelist/templates/phonelist.list.template.html",
//         //scope: false,
//         scope: {
//             phones: '=',
//             seeimage: '=',
//             direccion: '=',
//             queryselector: '=',
//             query: '=',
//             deletePhone: '&'
//         },
//         //bindToController: true
//     };
// });

// angular.module('appPhone').directive("phoneSearch", function () {
//     return {
//         restrict: "EA",
//         replace: 'true',
//         templateUrl: "app/shop/phonelist/templates/phonelist.search.template.html",
//         scope: {
//             queryselectorLabels: '=',
//             seeimageLabels: '=',
//             seeimage: '=',
//             direccion: '=',
//             queryselector: '=',
//             query: '=',
//             reloadjson: '&'
//         },
//         //bindToController: true
//     };
// });