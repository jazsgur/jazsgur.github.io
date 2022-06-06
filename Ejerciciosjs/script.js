var btnddjj = document.getElementById("enviarddjj")
btnddjj.addEventListener("click", ddjj)

function mostrarDiagnostico () {
    var fiebre = document.getElementById("btnfiebre").value
    var garganta = document.getElementById("btngarganta").value

    if (fiebre && garganta == true) {
        return "Usted tiene covid"
    }
    else if (fiebre || garganta == true) {
        return "Usted está enfermx"
    }
    else {
        return "Usted está sanx"
    }
}

function ddjj () {
    var diagnostico = mostrarDiagnostico()
    document.getElementById("alertdiagnostico").innerText=diagnostico
}