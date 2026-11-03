function horas30Minutos() {
    let horas = 9;
    let minutos = 0;

    while (horas !== 22 || minutos !== 0 ) {
        console.log(horas + (minutos === 0 ? ":00" : ":30"));
        if (minutos === 30) {
            minutos = 0;
            horas++;
        } else {
            minutos = 30;
        }
    }
}
horas30Minutos();