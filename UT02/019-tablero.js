function tablero(numColumnas, numFilas) {
    let columnaImpar = true;

    if (numColumnas > 0 && numFilas > 0) {
        
        for (let i = 0; i < numFilas; i++) {
            
            let linea = "";
            for (let j = 0; j < numColumnas; j++) {
                
                if (columnaImpar) {
                    linea += "#";
                    columnaImpar = false;
                } else {
                    linea += " ";
                    columnaImpar = true;
                }
            }
            
            console.log(linea);
            
            
        }
    }
}
tablero(7,4);