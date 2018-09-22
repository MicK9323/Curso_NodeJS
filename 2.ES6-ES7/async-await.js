// =======================================================
// ASYNC - AWAIT -> ES7
// =======================================================

/*let obtenerNombre = () => {
    return new Promise((resolve, reject) => {
        resolve('Fernando');
    });
};*/

// =======================================================
// La promesa anterior puede ser fácilmente reemplazada por
// la siguiente expresión async que también define una promesa
// y puede trabajar tanto con funciones flecha como con
// funciones convencionales
// =======================================================

/*let obtenerNombre = async () => {
    // throw new Error('No existe un nombre definido');
    // undefined.nombre;
    return 'Miguel';
};

console.log(obtenerNombre());
obtenerNombre().then(nombre => console.log(nombre))
    .catch(e => console.log('Error ASYNC', e));*/

// =======================================================
// Con una expresión await podemos hacer que una función
// asíncrona trabaje como una función síncrona
// =======================================================
let obtenerNombre = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Miguel'), 3000);
    });
};
// obtenerNombre().then(result => console.log(result));

let saludar = async () => {
    // Con la expresión await espera a que la promesa obtenerNombre devuelva un valor
    let nombre = await obtenerNombre();
    return `Hola ${nombre}`;
};

saludar().then(saludo => console.log(saludo));
