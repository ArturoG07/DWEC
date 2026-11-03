let array = [1, "dos", "tres", 4, 5, "seis", "siete"];

let array1 = array.slice();

for (let i = array1.length - 1; i >= 0; i--) {
    if (typeof array1[i] === "string") {
        array1.splice(i, 1);
    }
}
console.log("Ejercicio 1:", array1);


let array2 = array.slice();

for (let i = array2.length - 1; i >= 0; i--) {
    if (typeof array2[i] === "string") {
        array2.splice(i + 1, 0, array2[i].toUpperCase());
    }
}
console.log("Ejercicio 2:", array2);


let array3 = array.slice();

for (let i = array3.length - 1; i >= 0; i--) {
    if (typeof array3[i] === "string") {
        array3.splice(i, 1, "ELIMINADO", "INSERTADO");
    }
}
console.log("Ejercicio 3:", array3);