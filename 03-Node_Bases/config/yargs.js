const params = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 12
    }
};

const argv = require('yargs')
    .command('listar',
        'Imprimir en consola la tabla de multiplicar de un número enviado como parámetro', params)
    .command('crear',
        'Crea un archivo de texto plano con una tabla de impresión', params)
    .help()
    .argv;

module.exports = {argv};
