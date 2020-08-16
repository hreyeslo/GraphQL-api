const { ApolloServer } = require('apollo-server');
const DB = require('./db/manager');

const server = new ApolloServer({
	typeDefs: require('./api/schema'),
	resolvers: require('./api/resolvers')
});

DB.url = process.env.DB_URI || '';

DB.instance.then(() => {
	require('./db/model-manager');
	server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
		console.log(`🚀 Server ready at ${url}`);
	});
});





