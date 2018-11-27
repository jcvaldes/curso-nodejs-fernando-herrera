let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido} - poder: ${this.poder}`
    }
};

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;

// let { nombre, apellido, poder } = deadpool;
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);