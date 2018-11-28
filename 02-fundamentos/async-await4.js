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

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`Error: no existe un empleado con id ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`Error: no se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
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