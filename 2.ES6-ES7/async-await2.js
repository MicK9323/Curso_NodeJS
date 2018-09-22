let empleados = [
    {id:1, name:'Miguel'},
    {id:2, name:'Angel'},
    {id:3, name:'Gisella'},
];

let salarios = [
    {id:1, monto: 1000},
    {id:2, monto: 2000}
];

let obtenerEmpleado = async (id) => {
    let empleado = empleados.find(emp => emp.id === id);
    if(!empleado){
        throw new Error(`No existe un empleado con id ${id}`)
    } else {
        return empleado;
    }
};

let obtenerSalario = async (empleado) => {
    let sueldo = salarios.find(s => s.id === empleado.id);
    if(!sueldo){
        throw new Error(`No existe un sueldo registrado para el empleado ${empleado.name}`);
    } else {
        return {id: empleado.id, empleado: empleado.name, sueldo: sueldo.monto};
    }
};

let obtenerInformacion = async (id) => {
  let empleado = await obtenerEmpleado(id);
  let result = await obtenerSalario(empleado);
  return `El empleado ${result.empleado} tiene un salario de ${result.sueldo}$`;
};

obtenerInformacion(4)
    .then(data => console.log(data))
    .catch(err => console.log('Error:',err));
