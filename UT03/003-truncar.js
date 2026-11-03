function truncar(str, maxLong) {
    let newStr = str;
    if(str.length > maxLong) {
        newStr = str.slice(0, maxLong) + "...";
    }
    return newStr;
}
console.log(truncar("Lo que me gustaría contar sobre este tema es:", 20));
console.log(truncar("Hola a todos!", 20));
