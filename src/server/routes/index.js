module.exports = function(app) {
	var jsonfileservice = require('./utils/jsonfileservice')();

	app.get('/api/services', getServices);
	app.get('/api/texts', getTexts);

	function getServices(req, res, next) {
		var json = jsonfileservice.getJsonFromFile('/../../data/data.json');
		res.send(json);
	}

	function getTexts(req, res, next) {
		var json = jsonfileservice.getJsonFromFile('/../../data/texts.json');
		res.send(json);
	}
};