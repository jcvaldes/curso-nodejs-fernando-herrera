let { crearArchivo } = require('./multiplicar/multiplicar');

let base = 5;

crearArchivo(base).then(archivo => {
    console.log(`El archivo ${archivo} ha sido creado`);
    console.log(module);
}).catch(err => {
    console.log(err);
});