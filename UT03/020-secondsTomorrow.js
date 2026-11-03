function getSecondsToTomorrow() {
    let ahora = new Date();
    let hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    let segundosHoy = (ahora.getTime() - hoy.getTime()) / 1000;
    const SEGUNDOS_DIA = 24*60*60;

    return SEGUNDOS_DIA-segundosHoy;
}
console.log(getSecondsToTomorrow());