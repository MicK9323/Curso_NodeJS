let empleados = [
    {id:1, name:'Miguel'},
    {id:2, name:'Angel'},
    {id:3, name:'Gisella'},
];

let salarios = [
    {id:1, monto: 1000},
    {id:2, monto: 2000}
];

let obtenerEmpleado = (id, callback) => {
  let empleado = empleados.find(x => x.id === id);
  !empleado ? callback(`No existe un empleado con id ${id}`) : callback(null, empleado);
};

let obtenerSalario = (empleado, callback) => {
    let sueldo = salarios.find(x => x.id === empleado.id);
    !sueldo ? callback(`No existe un salario para ${empleado.name}`)
        : callback(null, {id: empleado.id, nombre: empleado.name, salario: sueldo.monto});
};

obtenerEmpleado(1, (err, empleado) => {
   if(err){
       console.log('Error:',err);
   } else {
       obtenerSalario(empleado, (err, result) => {
           !err ? console.log('Resultado:',result)
                : console.log('Error:',err);
       });
   }
});
