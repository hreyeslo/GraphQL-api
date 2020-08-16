const { gql } = require('apollo-server');

module.exports = gql`
	type User {
		name: String
		last_name: String
	}
	
 	type Query {
 		user(name: String!): User
    users: [User]
  }
`;
