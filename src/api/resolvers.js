const DB = require('../db/manager');

module.exports = {
	Query: {
		users: async () => await DB.getModel('USERS').find({}),
		user: async (data) => await DB.getModel('USERS').find({ name: data.name }).exec()
	}
};
