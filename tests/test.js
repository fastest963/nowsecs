var reload = require('require-reload')(require);
reload('../nowsecs.js');

exports.returnsTimeSecs = function(test) {
    var now = Date.now(),
        secs = Date.nowSecs();
    test.equal(Math.floor(now / 1000), secs);
    test.done();
};

exports.dateNowPolyfill = function(test) {
    Date.now = null;
    reload('../nowsecs.js');
    test.equal((new Date()).getTime(), Date.now());
    test.done();
};