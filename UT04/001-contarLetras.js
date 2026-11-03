function contarLetras(cadena, letra) {
    return cadena.split(letra).length-1;
}
let contarLetras2 = function(cadena, letra) {
    return cadena.split(letra).length-1;
}
let contarLetras3 = (cadena,letra) => {
    return cadena.split(letra).length-1;
}
console.log(contarLetras("aaagffdsaa", "a"));
console.log(contarLetras2("aaagffdsaaa", "a"));
console.log(contarLetras2("aaagfafdasaa", "a"));