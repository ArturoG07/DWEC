function contarLetra(cad, letra) {
    return cad.split(letra).length-1;
}

console.log(contarLetra("prueba a a", "a"));