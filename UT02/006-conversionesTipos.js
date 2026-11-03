console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" -2);
console.log("4px" - 2);
console.log("    -9    " + 5);
console.log("    -9    " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);

/**
1.10 por que al ser el primero un string concatena el 1 y el 0
2. -1 por que al ser un – lo transforma a un integer
3. 1, ya que al pasar booleanos a integer se vuelven 1 y 0
4. 2, por que la cadena de texto se transforma a un int
5. 6, ya que se transforman a integer
6. 9px, ya que la primera suma se hace como integers y luego se concatenan strings
7. $45, ya que al concatenar el primer string los dos integers se pasan a string
8. 2, ya que al ser una resta se transforma el string a integer
9. NaN, ya que se transforma en NaN al no poder transformar el string para la resta
10.     -9    5, ya que concatena strings
11. -14 por que al ser una resta se transforma el string en un int
12. 1, ya que null se transforma en 0
13. NaN, ya que undefined en integer es NaN y NaN + 1 es NaN
14. -2 por que una cadena que solo contiene espacios, tabuladores o saltos de línea se recorta a una cadena vacía
 */