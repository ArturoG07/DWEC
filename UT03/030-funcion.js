function cambioPagina(url, reemplazar = false) {
    if(url !== null && url !== undefined && url !== "") {
        if (reemplazar) {
            location.replace(url);
        } else {
            location.assign(url);
        }
    } else {
        console.log("No hay URL");
    }
}