const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if (!birthdate) return new Error('Invalid birthdate');

    return getAgePlugin(birthdate);
}

module.exports = {
    getAge,
    
}