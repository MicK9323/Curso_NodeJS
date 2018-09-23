const {generar} = require('./utils/operaciones');

let base = '3';

generar(base)
    .then(result => console.log(result))
    .catch(err => console.log(err));
