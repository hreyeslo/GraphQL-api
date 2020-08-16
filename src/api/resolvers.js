const DB = require('../db/manager');

module.exports = {
	Query: {
		users: async () => await DB.getModel('USERS').find({}),
		user: async (obj, args) => await DB.getModel('USERS').find({ name: args.name }).exec()
	}
};
