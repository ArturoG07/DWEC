function calcularHora() {
    let ahora = new Date();
    let horas = ahora.getHours();         
    let minutos = ahora.getMinutes();     
    let segundos = ahora.getSeconds();    
    console.log("Horas: " + horas + ", Minutos: " + minutos + ", Segundos: " + segundos);
}
let vble = setInterval(calcularHora, 1000);