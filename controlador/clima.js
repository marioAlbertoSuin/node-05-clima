const axios = require('axios');

const getClima = async(ciudad, p, h) => {

    const ciuUrl = encodeURI(ciudad)
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciuUrl}&appid=25e9340ae651db36a1ce4e5a0eb3611d&units=metric`);
    if (h == true && p == true) {
        return `${resp.data.main.temp} la presión es de ${resp.data.main.pressure} y la humedad es de ${resp.data.main.humidity}`;

    } else if (h == true) {
        return `${resp.data.main.temp} la humedad es de ${resp.data.main.humidity}`;
    } else if (p == true) {
        return `${resp.data.main.temp} la presión es de ${resp.data.main.pressure} `;
    } else {
        return `${resp.data.main.temp}`
    }




}


module.exports = {
    getClima
}