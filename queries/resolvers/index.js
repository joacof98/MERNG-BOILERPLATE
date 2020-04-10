const eventResolvers = require('./events.js');

/* 
Archivo que referencia a TODOS los resolvers (El como se procesa una query del usuario.)
Esto es por conveniencia, en archivo del servidor importamos la carpeta resolvers, que 
se va a fijar directamente aca para obtener cualquier query o mutacion, independientemente de a que afecte.
*/

module.exports = {
	Query: {
		...eventResolvers.Query
	},
	Mutation: {
		...eventResolvers.Mutation
	}
}