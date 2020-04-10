const {gql} = require('apollo-server');

/*
Defino todos mis tipos que usara GRAPHQL como intermediario entre
frontend-bd. Ademas defino como recibo cada query o mutacion (formato gql)
que va a venir desde el frontend.
IMPORTANTE: El como se procesa cada query estan en los resolvers, aca solo definicion.

*/
module.exports = gql`
	type Event{
		id: ID!
		title: String!
		body: String!
		createdAt: String!
		finish: String!
		username: String!
    }
    
	type Query{
		getEvents(username: String!) : [Event]
	}

	type Mutation{
		createEvent(title: String!, body: String!, finish: String!) : Event!
		deleteEvent(eventId: ID!) : String!
		updateEvent(eventId: ID!, title: String!, body: String!, finish: String!) : Event! 
	}

`