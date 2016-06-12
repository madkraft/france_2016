module.exports = function (ngModule) {
    ngModule.component('headerComp', {
        template: require('./header.jade')()
    });
};
