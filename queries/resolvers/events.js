const Event = require('../../models/Event');

//Definicion exacta de como proceso cada query-mutacion.
//c/u respetan los parametros establecidos en su definicion(typeDefs.js)

module.exports = {
	Query: {
		async getEvents(_,{username}) {
			try{
				const events = await Event.find({username}).sort({createdAt: -1});
				return events;
			} catch(err){
				console.log(err);
			}
        }
    },
    Mutation: {
        async createEvent(_, {title,body,finish}) {
            // checkeo de params, o lo que se necesite.
            const user = checkAuth(context);
            
			const newEvent = new Event({
				title,
				body,
				finish,
				createdAt: new Date().toISOString(),
				username: user.username
			});

			return newEvent.save();
		}
    }
}