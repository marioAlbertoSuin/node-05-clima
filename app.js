const clima = require('./controlador/clima');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: "Nombre de la ciudad para obtener el clima",
        demand: true
    },
    presion: {
        alias: 'p',
        desc: "presion de la ciudad ",
        demand: false
    },
    humedad: {
        alias: 'h',
        desc: "humedad de la ciudad ",
        demand: false
    }

}).argv;


const getInfo = async(ciudad) => {


    try {
        const temp = await clima.getClima(argv.ciudad, argv.presion, argv.humedad);
        return `El clima de ${ciudad} es de ${temp}`;
    } catch (error) {
        return `No se encuentra la ciudad`

    }



}

getInfo(argv.ciudad).then(console.log).catch(console.log);