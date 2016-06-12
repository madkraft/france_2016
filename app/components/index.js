module.exports = function (ngModule) {
    require('./header/header.js')(ngModule);
    require('./home/home.js')(ngModule);
    require('./fixtures/fixtures.js')(ngModule);
};
