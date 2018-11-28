// let getNombre = () => {
//     return 'Joaquín';
// };

// con async devuelve una promesa
let getNombre = async() => {
    throw new Error('No existe un nombre para ese usuario');
    return 'Joaquín';
};
// También funciona
// let getNombre = async function() {
//     throw new Error('No existe un nombre para ese usuario');
//     return 'Joaquín';
// };

// let getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Oliver');
//     });
// };
getNombre().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log('Error de async: ', e);
});