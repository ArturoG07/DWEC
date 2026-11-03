function ultimoDiaMes(anno, mes) {
    let fecha = new Date(anno, mes);
    const DIA = 1000*60*60*24;
    while(fecha.getMonth() === mes) {
        fecha.setTime(fecha.getTime() + DIA);
    }
    fecha.setTime(fecha.getTime() - DIA);
    return fecha.getDate();
}
console.log(ultimoDiaMes(2026, 1)); //febrero, 28
console.log(ultimoDiaMes(2026, 9)); //agosto, 31
console.log(ultimoDiaMes(2026, 10)); //septiembre, 30
console.log(ultimoDiaMes(2026, 11)); //octubre, 31
console.log(ultimoDiaMes(2024, 1)); //febrero bisiesto, 29
