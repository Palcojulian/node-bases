const axios = require('axios')

//CONSULTA USANDO AXIOS
const httpClient = {
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
    },
    post: async (url) => { },
    put: async (url) => { },
    delete: async (url) => { },

}


const httpClientPlugin = {
    get: async (url) => {
        const resp = await fetch(url);
        return await resp.json()
    },
    post: async (url) => { },
    put: async (url) => { },
    delete: async (url) => { },

}


module.exports = {
    http: httpClient,

}