let empleados = [{
    id: 1,
    nombre: 'Joaquin'
}, {
    id: 2,
    nombre: 'Oliver'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`Error: no existe un empleado con id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`Error: no se encontro un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
}

let getInfo = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return resp;
}

getInfo(2).then(mensaje => {
        console.log(`El salario de ${mensaje.nombre} es de ${mensaje.salario}`);
    })
    .catch(err => console.error(err));;