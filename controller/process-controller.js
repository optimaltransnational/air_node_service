
const Data = require("../utils/dataJson"); 


function ProcessController(){
	
}

ProcessController.prototype.airlines = function (){
	return Data.airlines;
};


ProcessController.prototype.airports = function (airportCode){
	for(var key in Data.airports){
		if(Data.airports[key]["airportCode"] === airportCode){
			return Data.airports[key];			
		} 
	}
	return {"statusCode": 400, "Message" : "Invalid AirportCode"};
};


ProcessController.prototype.flight_Search = function (airline_code, date, from, to){
	var airlines_InfoArr = [];
	for (var index in  Data.flight_Search){
		if(Data.flight_Search[index]["airline"]["code"] === airline_code &&
				Data.flight_Search[index]["start"]["dateTime"].indexOf(date) > -1 &&
				Data.flight_Search[index]["start"]["cityCode"] === from &&
				Data.flight_Search[index]["finish"]["cityCode"] === to){
			airlines_InfoArr.push(Data.flight_Search[index]);
		}
	}
	if(airlines_InfoArr.length !== 0 ){
		return airlines_InfoArr;
	}
	return {"statusCode": 404, "Message" : "Flights not available Try some other date eg.(2016-09-03)"};
};




module.exports = new ProcessController();