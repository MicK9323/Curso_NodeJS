const {generarArchivo} = require('./files');

let multiplicar = async (base) => {
    if (!Number(base)) {
       throw new Error(`La base ${base} introducida no es un número válido`);
    }

    let contenido = `----------------------\n`;
    contenido += `Tabla del ${base}\n`;
    contenido += `----------------------\n\n`;

    for(let i=1; i<=12;i++){
        contenido += `${base} x ${i} = ${base*i}\n`;
    }

    return {base, contenido};
};

let generar = async (base) => {
    let data = await multiplicar(base);
    return await generarArchivo(data);
};

module.exports = {generar};