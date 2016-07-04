/**
 * Created by mayank on 01/07/16.
 */

var Handler = require("../controller/request-dispatcher")

// API Server Endpoints
exports.endpoints = [
                     { method: ['GET'], path: '/', config: Handler.index},
    { method: ['GET'], path: '/airlines', config: Handler.search_Airlines},
    { method: ['GET'], path: '/airports', config: Handler.search_Airports},
    { method: ['GET'], path: '/flight_search/{airline_code}', config: Handler.flight_Search}

];