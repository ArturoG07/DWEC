function diaSemana(fecha) {
    let dias = [
        'domingo',
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sabado'
    ];
    return dias[fecha.getDay()];
}
console.log(diaSemana(new Date()));