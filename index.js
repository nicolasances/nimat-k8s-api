let Controller = require('toto-api-controller');
let config = require('./config');
let hello = require('./dlg/Hello');

let apiName = 'hackathon-api';

let api = new Controller(apiName, config.config);

api.path('GET', '/hello/:name', hello);

api.listen();
