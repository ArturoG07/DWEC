function palindromo(cadena) {
    let cadenaOriginal = cadena;
    let newCadena = "";
    cadena = cadena.toLowerCase();
    let oldCadena = cadena;
    let max = oldCadena.length;
    let cont = 0;

    //Asignacion de la nueva cadena al reves ignorando espacios
    while (cont < max) {
        newCadena = cadena.slice(0, 1) !== " " ? cadena.slice(0, 1) + newCadena : newCadena;
        cadena = cadena.slice(1);
        cont++;
    }

    //Eliminacion de espacios de la cadena original
    cont = 0;
    while (cont < max) {
        if (oldCadena[cont] === " ") {
            oldCadena = oldCadena.substring(0, cont) + oldCadena.substring(cont+1);
        } else {
            cont++;
        }
    }


    if (oldCadena ===  newCadena) {
        console.log(cadenaOriginal + " Es palindromo");
    } else {
        console.log(cadenaOriginal + " No es palindromo");
    }
}
palindromo("Yo hago yoga hoy");
palindromo("teads");