function getSecondsToday() {
    let ahora = new Date();
    let hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    return (ahora.getTime() - hoy.getTime())/1000;
}
console.log(getSecondsToday());