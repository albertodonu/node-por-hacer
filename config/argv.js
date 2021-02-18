const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea  por  hacer"
}

const completado = {
    alias: 'c',
    default: true,
    desc: "Marca como completado  o pendiente una tarea"
}

// const argv = require('yargs')
//     .command('crear',
//         'crea un elemento por hacer', {
//             descripcion: {
//                 demand: true,
//                 alias: 'd',
//                 desc: "Descripcion de la tarea  por  hacer"
//             }
//         }
//     )
//     .command('actualizar',
//         'actualiza  el estado completado de una tarea', {
//             descripcion: {
//                 demand: true,
//                 alias: 'd',
//                 desc: "Descripcion de la tarea  por hacer"

//             },
//             completado: {
//                 alias: 'c',
//                 default: true,
//                 desc: "Marca como completado  o pendiente una tarea"
//             }
//         }
//     )
//     .command('borrar',
//         'Borra una tarea por hacer ', {
//             descripcion: {
//                 demand: true,
//                 alias: 'd',
//                 desc: "Descripcion de la tarea  por hacer"

//             },
//         }
//     )

const argv = require('yargs')
    .command('crear',
        'crea un elemento por hacer', {
            descripcion
        }
    )
    .command('actualizar',
        'actualiza  el estado completado de una tarea', {
            descripcion,
            completado
        }
    )
    .command('borrar',
        'Borra una tarea por hacer ', {
            descripcion
        }
    )
    .help()
    .argv;



module.exports = {
    argv
}