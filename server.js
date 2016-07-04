/**
 * Created by mayank on 01/07/16.
 */

const Hapi = require('hapi'),
    Config = require('./config/config'),
    Routes = require('./routes/routes'),
    Inert = require('inert'),
    Vision = require('vision'),
    HapiSwagger = require('hapi-swagger');



const Server = new Hapi.Server();

Server.connection({port: Config.server.port});
Server.route(Routes.endpoints);


const options = {
	    info: {
	            'title': 'Test API Documentation',
	            'version': '0.0.1',
	        }
	    };

Server.register([Inert,Vision,{'register': HapiSwagger,'options': options}], function(err){
	Server.views({
      engines: {
          html: require('handlebars')
      },
      path: 'views',
  });
	Server.start( function (err){
       if (err) {
            console.log(err);
        } else {
            console.log('Server running at:', Server.info.uri);
        }
    });
});