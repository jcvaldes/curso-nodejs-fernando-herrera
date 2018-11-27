// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => {
//     return a + b;
// }
let sumar = (a, b) => a + b;

console.log(sumar(10, 20));

let saludar = () => 'Hola Mundo';
console.log(saludar());

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    // getNombre: function() {
    //     return `${ this.nombre } ${ this.apellido} - poder: ${this.poder}`
    // }
    // no funciona
    // getNombre: () => {
    //     return `${ this.nombre } ${ this.apellido} - poder: ${this.poder}`
    // }
    // otra forma seria
    getNombre() {
        return `${ this.nombre } ${ this.apellido} - poder: ${this.poder}`
    }
  
};

console.log(deadpool.getNombre());