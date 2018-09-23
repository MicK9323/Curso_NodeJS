const fs = require('fs');

let base = 10;
let ruta = `./tablas/tabla-${base}.txt`;
let contenido = `----------------------\n`;
contenido += `Tabla del ${base}\n`;
contenido += `----------------------\n\n`;

for(let i=1; i<=12;i++){
    contenido += `${base} x ${i} = ${base*i}\n`;
}

fs.writeFile(ruta,contenido, err => {
   if(err) throw new Error('Error al crear el archivo');
   console.log(`Se genero el archivo ${ruta}`)
});
