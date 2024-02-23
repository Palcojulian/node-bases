// FUNCION PATRON ADAPTADOR, CREAR UN OBJETO TIPO PERSONA.
// const {getAge, newId} = require('./plugins')

// const { buildPerson } = require('./js-foundation/05-factory')

// const makePerson = buildPerson({ getAge, newId });

// const obj = { name: 'Julian', birthdate: '2000-10-01' };

// const julian = makePerson(obj);

// console.log({julian})


const { getPokemonId } = require('./js-foundation/06-promises');

getPokemonId(1)
    .then((response) => console.log(response))
    .catch((err) => console.log('Intente nuevamente'))
    .finally(()=> console.log('Finalizo la consulta'))
