let Controller = require('toto-api-controller');
let config = require('./config');

let apiName = 'hackathon-api';

let api = new Controller(apiName, config.config);

api.listen();
