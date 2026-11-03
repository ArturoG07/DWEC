function multiplos() {
    console.log("---LISTADO DE NUMEROS DEL 1 AL 100---")
    let repeticion = false;

    for (let i = 1; i <=100; i++) {

        repeticion = false;
        let frase = "" + i;

        for (let j = i - 1; j > 1; j--) {

            if (i % j === 0) {

                if (repeticion) {

                    frase += " y";
                } else {
                    repeticion = true;
                }

                frase += " es multiplo de ";
                frase += j
                
            }
        } 
        console.log(frase);       
    }
}
multiplos();