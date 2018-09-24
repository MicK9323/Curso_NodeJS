const {generar, listar} = require('./utils/operaciones');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        generar(argv.limite, argv.base)
            .then(result => console.log(colors.green.underline(result)))
            .catch(err => console.log(colors.red.underline(err)));
        break;
    case 'listar':
        listar(argv.limite, argv.base)
            .then(result => console.log(colors.blue(result)))
            .catch(err => console.log(colors.red.underline(err)));
        break;
    default:
        console.log(colors.yellow(`No se reconoce una instrucción para el comando '${comando}'`));
}
