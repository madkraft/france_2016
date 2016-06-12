module.exports = function (ngModule) {
    ngModule.config(function ($routeProvider) {
        $routeProvider
            .when("/", {template: "<home-comp></home-comp>"})
            .when("/fixtures", {template: "<fixtures></fixtures>"})
            .otherwise({redirectTo: "/"});
    });
};
