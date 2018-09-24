const argv = require('yargs').argv;
const {generar} = require('./utils/operaciones');

let base = process.argv[2].split('=')[1];

generar(base)
    .then(result => console.log(result))
    .catch(err => console.log(err));
