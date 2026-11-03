function EDAD1(edad) {
    return (edad >= 14 && edad <=90);
}
console.log(EDAD1(13)); //false
console.log(EDAD1(14)); //true
console.log(EDAD1(50)); //true
console.log(EDAD1(90)); //true
console.log(EDAD1(91)); //false
