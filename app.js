const clima = require('./controlador/clima');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: "Nombre de la ciudad para obtener el clima",
        demand: true
    }

}).argv;


const getInfo = async(ciudad) => {
    try {
        const temp = await clima.getClima(argv.ciudad);
        return `El clima es de ${ciudad} es de ${temp}`;
    } catch (error) {
        return `No se encuentra el clima de la ciudad`

    }
}

getInfo(argv.ciudad).then(console.log).catch(console.log);