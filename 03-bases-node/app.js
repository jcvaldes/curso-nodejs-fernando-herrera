// node app listar --help
// node app crear --base=12
// node app listar --base=10 -l=2
// node app crear --base=10 --limitel=22
// node app crear --base=10

const colors = require('colors/safe');
const { argv } = require('./config/yargs');

let { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`El archivo ${colors.green(archivo)} ha sido creado`);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');

}
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];