function diaSemanaLocal(fecha) {
    return fecha.getDay() === 0 ? 7 : fecha.getDay();
}
let fecha = new Date("2026/10/11");
console.log(diaSemanaLocal(fecha));
console.log(diaSemanaLocal(new Date()));