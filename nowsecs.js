if (!Date.now) {
    Date.now = function() {
        return (new Date()).getTime();
    };
}
Date.nowSecs = function() {
    return Math.floor(Date.now() / 1000);
};
