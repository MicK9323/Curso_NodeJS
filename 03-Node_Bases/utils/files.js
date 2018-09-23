const fs = require('fs');

let generarArchivo = async (data) => {
  let ruta = `./tablas/tabla-${data.base}.txt`;
  let contenido = data.contenido;

  fs.writeFile(ruta, contenido, err => {
     if(err){
         throw new Error(err.stack);
     }
  });
  return `Se genero el archivo en la ruta ${ruta}`;
};

module.exports = {generarArchivo};
