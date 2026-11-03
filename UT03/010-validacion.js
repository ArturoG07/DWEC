function validarNIF_NIE(nif_nie) {
    let tipo = "";
    let num = Number(nif_nie.substring(0,nif_nie.length-1));
    let letraNIF;
    let multNif;

    if (isNaN(num)) {
        tipo = "nif";
        num = Number(nif_nie.substring(1,nif_nie.length-1));
        letraNif = nif_nie.substring(0, 1);
        switch(letraNif) {
            case "Z" :
                multNif = 2;
                num = num + 2*10000000;
                break;
            case "Y" :
                multNif = 1;
                num = num + 1*10000000;
                break;
            case "X" :
                multNif = 0;
                break;
        }
    } else {
        tipo = "dni";
    }

    let resto = num % 23;
    let letra;

    switch (resto) {
        case 0:  letra = "T"; break;
        case 1:  letra = "R"; break;
        case 2:  letra = "W"; break;
        case 3:  letra = "A"; break;
        case 4:  letra = "G"; break;
        case 5:  letra = "M"; break;
        case 6:  letra = "Y"; break;
        case 7:  letra = "F"; break;
        case 8:  letra = "P"; break;
        case 9:  letra = "D"; break;
        case 10: letra = "X"; break;
        case 11: letra = "B"; break;
        case 12: letra = "N"; break;
        case 13: letra = "J"; break;
        case 14: letra = "Z"; break;
        case 15: letra = "S"; break;
        case 16: letra = "Q"; break;
        case 17: letra = "V"; break;
        case 18: letra = "H"; break;
        case 19: letra = "L"; break;
        case 20: letra = "C"; break;
        case 21: letra = "K"; break;
        case 22: letra = "E"; break;
        default: letra = "Número no válido";
    }

    if (tipo == "dni") {
        console.log((num + letra == nif_nie) ? "El DNI/NIF es correcto" : "El DNI/NIF no es correcto");
    } else if (tipo == "nif") {
        console.log((letraNif + (num - multNif * 10000000) + letra) == nif_nie ? "El NIE es correcto" : "El NIE no es correcto");
    }
}
//Ejemplo NIE correcto
validarNIF_NIE("Y6478436V");
//Ejemplo NIF correcto
validarNIF_NIE("12313207L");
//Ejemplo NIE incorrecto
validarNIF_NIE("Y9478436V");