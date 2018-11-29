const fs = require('fs');

let base = 5;
let data = '';
for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${ base * i}\n`;
    console.log(`${base} * ${i} = ${ base * i}`);

}
// const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});