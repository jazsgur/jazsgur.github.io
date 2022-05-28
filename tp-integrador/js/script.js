var resumen = document.getElementById("resumen")
resumen.addEventListener("click", valortotal)
function valortotal() {
    var cantidad = parseInt(document.getElementById("cantidad").value)
    var categoria = pasarStringAPorcentaje(document.getElementById("categoria").value)

    var resultado = (cantidad*(200-devolverImportePorcentaje(categoria)))
    document.getElementById("total").innerText=resultado
}
function pasarStringAPorcentaje(stringcategoria) {
    if (stringcategoria== "Estudiante") {
        return 0.8
    }
    else if (stringcategoria== "Trainee") {
        return 0.5
    }

    else if (stringcategoria== "Junior") {
        return 0.15
    }

}
function devolverImportePorcentaje(porcentaje) {
    return (porcentaje*200)
}