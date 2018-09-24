const {generarArchivo} = require('./files');

let multiplicar = async (limite, base) => {
    if (!Number(base)) {
       throw new Error(`La base ${base} introducida no es un número válido`);
    }

    let contenido = `----------------------\n`;
    contenido += `Tabla del ${base}\n`;
    contenido += `----------------------\n\n`;

    for(let i=1; i<=limite;i++){
        contenido += `${base} x ${i} = ${base*i}\n`;
    }

    return {base, contenido};
};

let listar = async (limite, base) => {
    if (!Number(base)) {
        throw new Error(`La base ${base} introducida no es un número válido`);
    }
    if (!Number(limite)) {
        throw new Error(`El limite ${limite} introducido no es un número válido`);
    }

    let data = await multiplicar(limite, base);
    return data.contenido;
};

let generar = async (limite, base) => {
    let data = await multiplicar(limite, base);
    return await generarArchivo(data);
};

module.exports = {generar, listar};
