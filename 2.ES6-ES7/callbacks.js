// =======================================================
// CALLBACKS:
// Los callbacks son funciones que se envian como parámetro
// a otras funciones para que se ejecuten una vez terminen
// de ejecutarse estas.
// =======================================================

// El setTimeout ejecuta una función pasados una cierta cantidad de milisegundos
// setTimeout(() => console.log('Han pasado 3 segundos'), 3000);

// Crearemos una función con un callback.
let getUsuarioById = (id, callback) => {
  let usuario = {
      name: 'Miguel',
      id: id
  };
  // Si el id es 20 mostrara un mensaje de error
  id === 20 ? callback(`No existe un usuario con el id ${id}`) : callback(null, usuario);
};

getUsuarioById(10, (err, usuario) => {
   if(err){
       return console.log('Error:',err);
   }
   console.log('Usuario:',usuario);
});
