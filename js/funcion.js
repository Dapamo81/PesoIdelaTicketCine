function calcularPesoIdeal() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultadoDiv.innerHTML = "Por favor, ingresa valores válidos para altura y peso.";
        return;
    }


    const imc = peso / (altura * altura);


    const pesoIdeal = 22 * (altura * altura);
    const pesoIdealRedondeado = pesoIdeal.toFixed(2);


    resultadoDiv.innerHTML = `Para la altura ${altura} m y el peso ${peso} kg, tu peso ideal sería: ${pesoIdealRedondeado} kg.`;


    if (imc < 18.5) {
        resultadoDiv.innerHTML += "<br/>Estás por debajo del peso recomendado.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultadoDiv.innerHTML += "<br/>Estás en un rango de peso saludable.";
    } else if (imc >= 25 && imc <= 29.9) {
        resultadoDiv.innerHTML += "<br/>Tienes sobrepeso.";
    } else {
        resultadoDiv.innerHTML += "<br/>Tienes obesidad.";
    }
}

function mostrarTicket() {
    // Obtener los valores de los inputs
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const fila = document.getElementById("fila").value;
    const asiento = document.getElementById("asiento").value;

    document.getElementById("mostrarNombre").textContent = "Nombre: " + (nombre);
    document.getElementById("mostrarFecha").textContent = "Fecha: " + (fecha);
    document.getElementById("mostrarfila").textContent = "Fila: " + (fila);
    document.getElementById("mostrarButaca").textContent = "Asiento: " + (asiento);


}