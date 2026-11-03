function obtenerParametro(nombre) {
    let obtenido = location.search.slice(1).split("&");
    let resultado = null

    for (let i = 0; i < obtenido.length; i++) {
        let busqueda = obtenido[i].split("=");
        if (busqueda[0].trim() === nombre.trim()) {
            resultado = busqueda[1].trim();
        }
    }
    return resultado;
}