const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);


    if (!Number(base)) {
        reject(`el valor introducido de base ${base} no es un número`);
        return;
    }
    if (!Number(limite)) {
        reject(`el valor introducido de limite ${limite} no es un número`);
        return;
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${ base * i}\n`;
        console.log(`${base} * ${i} = ${ base * i}`);
    }
}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
            console.log(`${base} * ${i} = ${ base * i}`);

        }
        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}`);
            }
        });
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}