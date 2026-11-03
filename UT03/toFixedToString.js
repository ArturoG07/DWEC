console.log("num.toFixed(decimales)");
//toFixed convierte un numero a texto usando cantidad fija de decimales, redondeando si sobran y rellenando con 0 si faltan
let num = 5.56;
console.log(num.toFixed(5)); // Añade 0
console.log(num.toFixed(1)); // Redondea a 5.6
console.log(num.toFixed()); // Sin parametros no deja decimales

console.log("num.toString(base)");
// num.toString([base]) Convierte un número a texto, puede expresarlo en otra base numérica (sistema de numeración).
// Sin parámetro: usa base 10 (la normal, decimal).
// Con parámetro: un entero de 2 a 36
num = 26;
console.log(num.toString());//decimal
console.log(num.toString(10));//decimal
console.log(num.toString(2));//binario
console.log(num.toString(8));//octal
console.log(num.toString(16));//hexadecimal
console.log(num.toString(36));//ASCII