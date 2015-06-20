var apiModels = require.main.require('libs/models/apiModels'),
	typeHelper = require.main.require('libs/helpers/typeHelper'),
	stringHelper = require.main.require('libs/helpers/stringHelper');
	
var	debug = false,
	routePrefix = "/chunked/download",
	io = null,
	dataCache = null;

var routes = {
	"get": new apiModels.RouteHandler(routePrefix + "/:downloadId/:index", function (req, res) {
		
	}),
	"post": new apiModels.RouteHandler(routePrefix, function (req, res) {
		
	}),
	"delete": new apiModels.RouteHandler(routePrefix + "/:downloadId", function (req, res) {
		
	}),
	"error": new apiModels.ErrorHandler(function (error, req, res, next) {

	})
};

function configure(cache, storage, options) {
	if(typeHelper.isObject(options)) {
		if(options.hasOwnProperty('debug') && typeHelper.isBoolean(options.debug)){
			debug = options.debug;
		}
		if(options.hasOwnProperty('routePrefix') && typeHelper.isString(options.routePrefix)){
			routePrefix = stringHelper.stripTrailingSlashes(options.routePrefix);
		}
	}
	
	io = storage;
	dataCache = cache;
	return routes;
};
module.exports = configure;