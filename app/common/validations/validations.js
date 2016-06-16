angular.module('appPhone').directive('onlyNumbers', function () {
    return {
        require: 'ngModel',
        link: function ($scope, $element, $attr, $mCtrl) {
            function onlyNumbersValidation(n) {
                if (!isNaN(parseFloat(n)) && isFinite(n)) {
                    $mCtrl.$setValidity('charE', true);
                } else {
                    $mCtrl.$setValidity('charE', false);
                }
                return n;
            }
            $mCtrl.$parsers.push(onlyNumbersValidation);
        }
    };
});