function horas5Minutos() {
    let horas = 9;
    let minutos = 0;

    while (horas !== 21 || minutos !== 35 ) {
        let linea = horas + ":";

        if (minutos < 10) {
            linea += "0";
        }
        
        linea += minutos;

        if (minutos === 55) {
            minutos = 0;
            horas++;
        } else {
            minutos += 5;
        }

        console.log(linea);
    }
}
horas5Minutos();