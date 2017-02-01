module.exports = function(app) {
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get('/api/services', getServices);

    function getServices(req, res, next) {
        var json = jsonfileservice.getJsonFromFile('/../../data/data.json');
        console.log(json)
        res.send(json);
    }
};