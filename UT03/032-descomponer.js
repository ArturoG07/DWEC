function decomponerURL(url) {
    // Protocolo: todo lo que hay antes de "://"
    let separador = url.indexOf("://");
    let protocolo = url.substring(0, separador);

    // Resto de la URL tras quitar "protocolo://"
    let resto = url.substring(separador + 3);

    let dosPuntos = resto.indexOf(":");   // posible inicio de puerto
    let barra = resto.indexOf("/");


    let dominio, puerto, ruta;

    if (dosPuntos !== -1 && dosPuntos < barra) {
        dominio = resto.substring(0, dosPuntos);
        puerto = resto.substring(dosPuntos+1, barra);
        ruta = resto.substring(barra);

    } else {
        dominio = resto.substring(0, barra);
        if (protocolo === "https") puerto = "443";
        if (protocolo === "http") puerto = "80";
        ruta = resto.substring(barra);
    }

    return [
        protocolo,
        dominio,
        puerto,
        ruta
    ];
}