// 1. Crear el array
let styles = ["Jazz", "Blues"];

// 2. Agregar "Rock-n-Roll" al final
styles.push("Rock-n-Roll");

// 3. Reemplazar el elemento del medio por "Classics"
styles[Math.floor(styles.length / 2)] = "Classics";

// 4. Quitar el primer valor y mostrarlo
console.log(styles.shift());

// 5. Insertar "Rap" y "Reggae" al principio
styles.unshift("Rap", "Reggae");