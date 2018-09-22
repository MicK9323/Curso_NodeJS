let deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    ability: 'Regeneration',
    getName() {
        return `${this.name} ${this.lastName} - ability: ${this.ability}`
    }
};

console.log('Deadpool:', deadpool.getName());

// =======================================================
// Con la destructuración de objetos podemos obtener sus
// atributos de la siguiente forma:
// =======================================================
let {name, lastName, ability} = deadpool;
console.log(name, lastName, ability);

// =======================================================
// Si se le quiere dar otro nombre de variable al atributo
// Obtenido de la destructuración se puede lograr de la
// siguiente forma:
// =======================================================
let {name: nombre, lastName: apellido, ability: poder} = deadpool;
console.log(nombre, apellido, poder);
