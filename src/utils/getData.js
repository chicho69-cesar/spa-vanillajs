const axios = require('axios')

const API = 'https://rickandmortyapi.com/api/character/'

const getData = async id => {
    const apiUrl = id 
        ? `${ API }${ id }`
        : API

    try {
        const response = await axios.get(apiUrl)
        const { data } = response
        return data
    } catch (error) {
        console.log('Fetch error: ' + error)
    }
}

export default getData