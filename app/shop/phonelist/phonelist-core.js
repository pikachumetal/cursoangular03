angular.module('appPhone').controller('PhoneListController', function PhoneListController($scope, PhoneService, PhoneLocalStorage) {
    "use strict";

    var reloadJSON = function reloadJSON() {
        PhoneService.getPhones().then(function (data) {
            $scope.phones = data;
            PhoneLocalStorage.setPhones(data);
        });
    }

    var loadQuerySelector = function loadQuerySelector() {
        PhoneService.getQuerySelector().then(function (data) {
            $scope.queryselectorLabels = data;
        });
    }

    var loadSeeImage = function loadSeeImage() {
        PhoneService.getSeeImage().then(function (data) {
            $scope.seeimageLabels = data;
        });
    }

    var loadPhones = function loadPhones() {
        return PhoneLocalStorage.getPhones();
    }

    var deletePhone = function deletePhone(id) {
        var that = this;
        id = parseInt(id || 0);
        $scope.phones = $scope.phones.filter(function (item) { return item.id !== id; });
        PhoneLocalStorage.setPhones($scope.phones);
    }

    var initController = function initController() {
        $scope.phones = loadPhones();
        $scope.query = "";
        $scope.queryselector = "1";
        loadQuerySelector();
        //$scope.queryselectorLabels = { "1": "Name", "2": "Description" };
        $scope.direccion = true;
        loadSeeImage();
        //$scope.seeimageLabels = { "app/shop/phonelist/templates/phonelist.list.image.template.html": "Images", "app/shop/phonelist/templates/phonelist.list.noimage.template.html": "No Images" };
        $scope.seeimage = "app/shop/phonelist/templates/phonelist.list.image.template.html";
        $scope.reloadjson = reloadJSON;
        $scope.deletePhone = deletePhone;
   }

    initController();
});

angular.module('appPhone').controller('PhoneEditController', function PhoneListController($scope, PhoneLocalStorage, $routeParams,$location) {
    "use strict";

    var saveForm = function saveForm() {
        PhoneLocalStorage.setPhone(parseInt($routeParams.id), $scope.phone);
        $location.path( "/phones/list" );
    };

    var resetForm = function resetForm() {
        $scope.phone = angular.copy($scope.master);
    };

    var initController = function initController() {
        var phone = PhoneLocalStorage.getPhone(parseInt($routeParams.id));
        $scope.phone = phone;
        $scope.master = angular.copy(phone);
        $scope.resetForm = resetForm;
        $scope.saveForm = saveForm;
    }

    initController();
});

angular.module('appPhone').controller('PhoneItemController', function PhoneListController($scope, PhoneLocalStorage, $routeParams) {
    var phone = PhoneLocalStorage.getPhone(parseInt($routeParams.id));
    $scope.phone = phone;
});