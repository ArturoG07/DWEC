function cuantoFalta(fecha) {
    let hoy = new Date();

    return Math.floor((fecha.getTime() - hoy.getTime()) / (1000*60*60*24));
}

let fecha = new Date(2026, 10, 11);
console.log(cuantoFalta(fecha));