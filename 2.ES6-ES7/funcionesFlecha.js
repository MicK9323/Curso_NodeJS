// =======================================================
// FUNCIONES FLECHA:
// Una función flecha tiene una sintaxis más corta
// que una expresión de función convencional y no vincula sus
// propios this, arguments, super, o new.target. Las funciones
// flecha siempre son anónimas. Estas funciones son funciones
// no relacionadas con métodos y no pueden ser usadas como
// constructores.

// Tener cuidado en estas funciones al hacer referencia al
// objeto This.
// =======================================================

// Función convencional
function sumar(a,b) {
    return a+b;
}
console.log('Func. Convencional:', sumar(10,20));

// Función flecha
let sumarFlecha = (a,b) => a+b;
console.log('Func. Flecha:', sumarFlecha(50,10));

// Func. convencional
function saludar() {
    return 'Hola Mundo!';
}
console.log('Func. Convencional:', saludar());

// Func. Flecha
let saludarFlecha = () => 'Hola Mundo!';
console.log('Func. Flecha:', saludarFlecha());
