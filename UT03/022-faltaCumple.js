function faltaCumple(dia, mes) {  

    let ahora = new Date();
    let proximoCumpleaños;

    //Calcular si el proximo cumpleaños es este año o el proximo
    if (ahora.getMonth() > mes || ahora.getMonth() === mes && ahora.getDate() > dia) {
        proximoCumpleaños = new Date(ahora.getFullYear()+1, mes, dia);
    } else { 
        proximoCumpleaños = new Date(ahora.getFullYear(), mes, dia);
    }

    //Calcular dias y horas restantes para el proximo cumpleaños y pasarlo por consola
    let msToCumpleaños = proximoCumpleaños.getTime() - ahora.getTime();
    let horasToCumpleaños = msToCumpleaños/1000/60/60;
    let dias = Math.floor(horasToCumpleaños/24);
    let horas = Math.floor(horasToCumpleaños % 24);
    console.log("Faltan aproximadamente " + dias + " dias y " + horas + " horas para tu cumpleaños");

    //Comprobar que cumpleaños caen en domingo
    for (let i = proximoCumpleaños.getFullYear(); i <= 2100; i++) {
        if ((new Date(i, mes, dia)).getDay() === 0) {
            console.log("El cumpleaños del año " + i + " cae en domingo");
        }
    }

}
faltaCumple(07, 11);