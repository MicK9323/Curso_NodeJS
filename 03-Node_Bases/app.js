const {generar, listar} = require('./utils/operaciones');
const argv = require('yargs')
    .command('listar', 
        'Imprimir en consola la tabla de multiplicar de un número enviado como parámetro', {
            base: {
                demand: true,
                alias: 'b'
            },
            limite: {
                alias: 'l',
                default: 12
            }
        })
    .command('crear',
        'Crea un archivo de texto plano con una tabla de impresión', {
            base: {
                alias: 'b',
                demand: true
            },
            limite: {
                alias: 'l',
                default: 12
            }
        })
    .help()
    .argv;

let comando = argv._[0];

switch (comando) {
    case 'crear':
        generar(argv.limite, argv.base)
            .then(result => console.log(result))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listar(argv.limite, argv.base)
            .then(result => console.log(result))
            .catch(err => console.log(err));
        break;
    default:
        console.log(`No se reconoce una instrucción para el comando '${comando}'`);
}
