const mongoose = require('mongoose');

class DBManager {

	constructor() {
		this._url = '';
		this._options = {
			useNewUrlParser: true,
			useUnifiedTopology: true
		};
		this._instance = null;
		this._models = new Map();
	}

	/**
	 * Method to set uri connection
	 * @param connectionString
	 */
	set url(connectionString) {
		this._url = connectionString;
	}

	/**
	 * Method to set custom options
	 * @param options
	 */
	set options(options) {
		this._options = {
			...this._options,
			...options
		};
	}

	/**
	 * Method to get the db connection instance
	 */
	get instance() {
		if (this._instance) {
			return Promise.resolve(this._instance);
		}
		return mongoose.connect(this._url, this._options).then(() => {
				this._instance = mongoose.connection;
				return this._instance;
			},
			error => {
				console.error(error);
				throw error;
			}
		);
	}

	/**
	 * Method to save mongoose models
	 * @param name
	 * @param schema
	 */
	setModel(name, schema) {
		const model = mongoose.model(name, new mongoose.Schema(schema));
		this._models.set(name, model);
	}

	/**
	 * Method to get mongoose model
	 * @param name
	 */
	getModel(name) {
		if (this._models.has(name)) {
			return this._models.get(name);
		}
	}

}

const DB = new DBManager();
module.exports = DB;
