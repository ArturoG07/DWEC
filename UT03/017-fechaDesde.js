function obtenerFechaHace(fecha, dias) {
    let ms = fecha.getTime() - dias*24*60*60*1000;
    return new Date(ms).getDate();
}
let date = new Date(2015, 0, 2);
console.log( obtenerFechaHace(date, 1) ); // 1, (1 Jan 2015)
console.log( obtenerFechaHace(date, 2) ); // 31, (31 Dec 2014)
console.log( obtenerFechaHace(date, 365) ); // 2, (2 Jan 2014)