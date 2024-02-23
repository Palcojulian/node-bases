
const buildPerson = ({getAge, newId}) => {
    return ({ name, birthdate }) => {
        return {
            id: newId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),

        }
    }
}

module.exports = {
    buildPerson,
}