angular.module('appPhone').controller('PhoneListController', function PhoneListController(PhoneService, PhoneLocalStorage) {
    "use strict";
    var that = this;
    
    var reloadJSON = function reloadJSON() {
        PhoneService.getPhones().then(function (data) {
            that.phones = data;
            PhoneLocalStorage.setPhones(data);
        });
    }

    var loadQuerySelector = function loadQuerySelector() {
        PhoneService.getQuerySelector().then(function (data) {
            that.queryselectorLabels = data;
        });
    }

    var loadSeeImage = function loadSeeImage() {
        PhoneService.getSeeImage().then(function (data) {
            that.seeimageLabels = data;
        });
    }

    var loadPhones = function loadPhones() {
        return PhoneLocalStorage.getPhones();
    }

    var deletePhone = function deletePhone(id) {
        id = parseInt(id || 0);
        that.phones = that.phones.filter(function (item) { return item.id !== id; });
        PhoneLocalStorage.setPhones(that.phones);
    }

    var initController = function initController() {
        that.phones = loadPhones();
        that.query = "";
        that.queryselector = "1";
        loadQuerySelector();
        //that.queryselectorLabels = { "1": "Name", "2": "Description" };
        that.direccion = true;
        loadSeeImage();
        //this.seeimageLabels = { "app/shop/phonelist/templates/phonelist.list.image.template.html": "Images", "app/shop/phonelist/templates/phonelist.list.noimage.template.html": "No Images" };
        that.seeimage = "app/shop/phonelist/templates/phonelist.list.image.template.html";
        that.reloadjson = reloadJSON;
        that.deletePhone = deletePhone;
    }

    initController();
});

// angular.module('appPhone',["ngMessages"]).controller('PhoneEditController', function PhoneListController(this, PhoneLocalStorage, $routeParams,$location) {
angular.module('appPhone').controller('PhoneEditController', function PhoneListController(PhoneLocalStorage, $routeParams, $location) {
    "use strict";
    var that = this;

    var saveForm = function saveForm() {
        PhoneLocalStorage.setPhone(parseInt($routeParams.id), that.phone);
        $location.path("/phones/list");
    };

    var resetForm = function resetForm() {
        that.phone = angular.copy(that.master);
    };

    var initController = function initController() {
        var phone = PhoneLocalStorage.getPhone(parseInt($routeParams.id));
        that.phone = phone;
        that.master = angular.copy(phone);
        that.resetForm = resetForm;
        that.saveForm = saveForm;
    }

    initController();
});

angular.module('appPhone').controller('PhoneItemController', function PhoneListController(PhoneLocalStorage, $routeParams) {
    var phone = PhoneLocalStorage.getPhone(parseInt($routeParams.id));
    this.phone = phone;
});