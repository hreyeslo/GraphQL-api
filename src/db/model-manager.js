const DB = require('./manager');

//REGISTRY
DB.setModel('USERS', require('./schemas/users.schema'));
