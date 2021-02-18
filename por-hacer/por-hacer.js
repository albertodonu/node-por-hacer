const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
        // console.log(`el archivo  tabla ${base}-.txt ha sido creado`);
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


    // console.log(listadoPorHacer);
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const actualizar = (descipcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descipcion;
    });


    if (index >= 0) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    } else {
        return false;
    }


}

const borrar = (descipcion) => {

    cargarDB();

    let arraySize = listadoPorHacer.length;

    listadoPorHacer = listadoPorHacer.filter((tarea) => {
        return tarea.descripcion !== descipcion;
    });

    if (arraySize > listadoPorHacer.length) {
        guardarDB();
        return true;
    } else {
        return false;
    }

    // let index = listadoPorHacer.findIndex((tarea) => {
    //     return tarea.descripcion === descipcion;
    // });

    // if(index => 0){
    //     listadoPorHacer.splice(index);
    //     return true;
    // }else{
    //     return false;
    // }


}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}


module.exports = {
    crear,
    actualizar,
    borrar,
    getListado
}