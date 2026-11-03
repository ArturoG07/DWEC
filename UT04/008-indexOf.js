function buscarCadenaA(array, cadena) {
    if (array[array.indexOf(cadena)]) {
        array[array.indexOf(cadena)] = cadena.toUpperCase(); 
    }
    return array;
}
console.log("Primero: " + buscarCadenaA(["resra" , "basf", "fasdc", "basf"], "basf"));

function buscarCadenaB(array, cadena) {
    let arrayReves = array.reverse();
    return buscarCadenaA(arrayReves, cadena).reverse();
}
console.log("Segundo: " + buscarCadenaB(["resra" , "basf", "fasdc", "basf"], "basf"));
function buscarCadenaC(array, cadena) {
    while (array[array.indexOf(cadena)]) {
        array[array.indexOf(cadena)] = cadena.toUpperCase();
    }
    return array;
}
console.log("Tercero: " + buscarCadenaC(["resra" , "basf", "fasdc", "basf"], "basf"));
