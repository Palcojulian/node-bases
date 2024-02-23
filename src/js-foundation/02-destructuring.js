console.log(process.env.PORT ?? 3000);

const { SHELL, TZ, PORT } = process.env;

const heroes = ['SUPERMAN', 'BATMAN', 'IRON MAN'];
const [ , , iron] = heroes;

// console.table({ SHELL, TZ, PORT })
console.log(iron)