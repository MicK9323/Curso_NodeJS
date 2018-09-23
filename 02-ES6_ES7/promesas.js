// =======================================================
// PROMESAS:
// =======================================================
let empleados = [
    {id:1, name:'Miguel'},
    {id:2, name:'Angel'},
    {id:3, name:'Gisella'},
];

let salarios = [
    {id:1, monto: 1000},
    {id:2, monto: 2000}
];

let obtenerEmpleado = (id) => {
    return new Promise((resolve, reject) => {
    let empleado = empleados.find(emp => emp.id === id);
    !empleado ? reject(`No existe un empleado con id ${id}`)
              : resolve(empleado);
    });
};

let obtenerSalario = (empleado) => {
    return new Promise((resolve, reject) => {
       let sueldo = salarios.find(s => s.id === empleado.id);
       !sueldo ? reject(`No existe un sueldo registrado para el empleado ${empleado.name}`)
               : resolve({id: empleado.id, empleado: empleado.name, sueldo: sueldo.monto});
    });
};

obtenerEmpleado(10).then(empleado => {
    return obtenerSalario(empleado);
}).then(result => console.log(`El sueldo de ${result.empleado} es ${result.sueldo}$`))
    .catch(err => console.log('Error',err));
