
function camelize(str) {
    while (str.indexOf("-") !== -1) {
        let posicion = str.indexOf("-");

        str = str.substring(0, posicion) +
              str.substring(posicion + 1, posicion + 2).toUpperCase() +
              str.substring(posicion + 2);
    }
    return str;
}

console.log(camelize("prueba-de-camelize"));
