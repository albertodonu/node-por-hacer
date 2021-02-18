// const argv = require('yargs').argv;
const argv = require('./config/argv').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')
    // console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log(`Crear por hacer`);
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        // console.log(`Mostrar todas la tareas por hacer `);

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=========== Por Hacer==========='.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log('================================'.green);
        }
        break;

    case 'actualizar':
        // console.log(`actualizar una tarea por hacer`);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(`Actualizacion de la tarea ${argv.descripcion}`, actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`La  tarea ${argv.descripcion} fue borrada: `, borrado);

        break;

    default:
        console.log(`Comando no reconocido`);

}