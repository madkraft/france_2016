module.exports = function (ngModule) {
    ngModule.directive('helloWorld', helloFun);

    function helloFun() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'common/js/directives/hello-world/hello-world.html',
            controllerAs: 'vm',
            controller: function () {
                var vm = this;

                vm.greeting = 'Hello Euro';
            }
        }
    }
};
