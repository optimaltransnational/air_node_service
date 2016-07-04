/**
 * Created by mayank on 01/07/16.
 */
const Joi = require('joi');
const processController = require('./process-controller');




exports.index = {
	tags : [ 'api' ], // airlines
	description : 'Provides Index page for airlines search',
	notes : 'The airline search main page',
	plugins : {
		'hapi-swagger' : {
			responses : {
				'400' : {
					'description' : 'Bad Request'
				}
			},
			payloadType : 'form'
		}
	},
	handler : function(request, reply) {
		console.log("index");
		reply.view("index");
	}
}

exports.search_Airlines = {
	tags : [ 'api' ], // airlines
	description : 'Provides a list of airlines',
	notes : 'The airline codes from the response is required for the flight search',
	plugins : {
		'hapi-swagger' : {
			responses : {
				'400' : {
					'description' : 'Bad Request'
				}
			},
			payloadType : 'form'
		}
	},
	handler : function(request, reply) {
		console.log("search_Airlines");
		reply(processController.airlines());
	}
}



exports.search_Airports = { // airports
	tags : [ 'api' ],
	description : 'Provides an airport search.',
	notes : 'The airportCode from the response is required for the flight search.',
	plugins : {
		'hapi-swagger' : {
			responses : {
				'400' : {
					'description' : 'Bad Request'
				}
			},
			payloadType : 'form'
		}
	},
	validate : {
		query : {
			q : Joi.string().required().max(3).description('Provide  airportCode'),
		}
	},
	handler : function(request, reply) {
		console.log("search_Airports");
		var airportCode = request.query.q;
		reply(processController.airports(airportCode));
	}
}




exports.flight_Search = { 									// flight_search
	tags : [ 'api' ],
	description : 'Provides a list of airlines.',
	notes : 'The airline code from the airlines endpoint',
	plugins : {
		'hapi-swagger' : {
			responses : {
				'400' : {
					'description' : 'Bad Request'
				}
			},
			payloadType : 'form'
		}
	},
	validate : {
		query : {
			date : Joi.string().required().description('Provide  date'),
			from : Joi.string().required().max(3).description('Provide  from'),
			to : Joi.string().required().max(3).description('Provide  to')
		},
		params : {
			airline_code : Joi.string().required().max(2).description('Provide  code')
		}
	},
	handler : function(request, reply) {
		console.log("flight_Search");
		console.log(request.params.airline_code, request.query.date, request.query.from, request.query.to);
		reply(processController.flight_Search(request.params.airline_code, request.query.date, request.query.from, request.query.to));
	}
}