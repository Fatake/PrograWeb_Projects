var listaEquipos = [];

function updateTeamsTable() {
    var lista = document.getElementById("TablaListaEquipos");
    removeElementsByClass('teamName');

    listaEquipos.push("" + document.getElementById("nuevoNombreEquipo").value);
    for (let i = 0; i < listaEquipos.length; i++) {
        var fila = document.createElement("tr");
        var celda = document.createElement("td");

        fila.setAttribute('class', 'teamName');

        celda.appendChild(document.createTextNode("" + listaEquipos[i]));
        fila.appendChild(celda);

        lista.appendChild(fila);
    }
    document.getElementById("nuevoNombreEquipo").value = "";
}

function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function Jugar() {
    if (listaEquipos.length == 0) {
        alert("No a agregado equipos");
        return 1;
    }
    
}