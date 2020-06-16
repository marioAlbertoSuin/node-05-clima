const axios = require('axios');

const getClima = async(ciudad) => {
    const ciuUrl = encodeURI(ciudad)
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciuUrl}&appid=25e9340ae651db36a1ce4e5a0eb3611d&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}