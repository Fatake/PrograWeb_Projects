var listaEquipos = [];
var listaCiclistas = [];

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

function obtenGol(){
    return Math.floor(Math.random() * 11);
}

function Jugar() {
    if (listaEquipos.length == 0) {
        alert("No a agregado elementos");
        return 1;
    }

    const divResults = document.getElementById("GameResults");
    removeElementsByClass("gameStatus");

    const tbl = document.createElement('table');
    tbl.setAttribute('class', 'gameStatus');
    tbl.style.border = '1px solid black';
    
    for (let i = 0; i <= listaEquipos.length; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j <= listaEquipos.length; j++) {
            const td = tr.insertCell();
            
            if (i == j ) {
                td.appendChild(document.createTextNode('-----'));
            } else if (i == 0) {  
                // Primera Fila j
                //td.appendChild(document.createTextNode('Cabecera'));
                td.appendChild(document.createTextNode(`${listaEquipos[j-1]}`));

            } else if (j == 0) { // Primera Columna i
                //td.appendChild(document.createTextNode('1ra Columna'));
                td.appendChild(document.createTextNode(`${listaEquipos[i-1]}`));

            } else { // Enmedio
                td.appendChild(document.createTextNode(`${obtenGol()},${obtenGol()}`));
            }
            td.style.border = '1px solid black';
        }
    }
    divResults.appendChild(tbl);

}

function GeneradorNombres(){
	var firstname = ["Adrián", "Agustín", "Alberto", "Alejandro", "Alexander", "Alexis", "Alonso", "Andrés Felipe", "Ángel", "Anthony", "Antonio", "Bautista", "Benicio", "Benjamín", "Carlos", "Carlos Alberto", "Carlos Eduardo", "Carlos Roberto", "César", "Cristóbal", "Daniel", "David", "Diego", "Dylan", "Eduardo", "Emiliano", "Emmanuel", "Enrique", "Erik", "Ernesto", "Ethan", "Fabián", "Facundo", "Felipe", "Félix", "Félix María", "Fernando", "Francisco", "Francisco Javier", "Gabriel", "Gaspar", "Gustavo Adolfo", "Hugo", "Ian", "Iker", "Isaac", "Jacob", "Javier", "Jayden", "Jeremy", "Jerónimo", "Jesús", "Jesús Antonio", "Jesús Víctor", "Joaquín", "Jorge", "Jorge  Alberto", "Jorge Luis", "José", "José Antonio", "José Daniel", "José David", "José Francisco", "José Gregorio", "José Luis", "José Manuel", "José Pablo", "Josué", "Juan", "Juan Ángel", "Juan Carlos", "Juan David", "Juan Esteban", "Juan Ignacio", "Juan José", "Juan Manuel", "Juan Pablo", "Juan Sebastián", "Julio", "Julio Cesar", "Justin", "Kevin", "Lautaro", "Liam", "Lian", "Lorenzo", "Lucas", "Luis", "Luis Alberto", "Luis Emilio", "Luis Fernando", "Manuel", "Manuel Antonio", "Marco Antonio", "Mario", "Martín", "Mateo", "Matías", "Maximiliano", "Maykel", "Miguel", "Miguel  ngel", "Nelson", "Noah", "Oscar", "Pablo", "Pedro", "Rafael", "Ramón", "Raúl", "Ricardo", "Rigoberto", "Roberto", "Rolando", "Samuel", "Samuel David", "Santiago", "Santino", "Santos", "Sebastián", "Thiago", "Thiago Benjamín", "Tomás", "Valentino", "Vicente", "Víctor", "Víctor Hugo"];
	var lastname= ["Garcia", "Gonzalez", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Sanchez", "Perez", "Gomez", "Martin", "Jimenez", "Ruiz", "Hernandez", "Diaz", "Moreno", "Alvarez", "Muñoz", "Romero", "Alonso", "Gutierrez", "Navarro", "Torres", "Dominguez",
	"Vazquez", "Ramos", "Gil", "Ramirez", "Serrano", "Blanco", "Suarez", "Molina", "Morales", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marin", "Sanz", "Nuñez", "Iglesias", "Medina", "Garrido", "Santos", "Castillo", "Cortes", "Lozano", "Guerrero", "Cano", "Prieto", "Mendez", "Calvo", "Cruz", "Gallego", "Vidal", "Leon", "Herrera", "Marquez", "Peña", "Cabrera", "Flores", "Campos", "Vega", "Diez", "Fuentes", "Carrasco", "Caballero", "Nieto", "Reyes", "Aguilar", "Pascual", "Herrero", "Santana", "Lorenzo", "Hidalgo", "Montero", "Ibañez", "Gimenez", "Ferrer", "Duran", "Vicente", "Benitez", "Mora", "Santiago", "Arias", "Vargas", "Carmona", "Crespo", "Roman", "Pastor", "Soto", "Saez", "Velasco", "Soler", "Moya", "Esteban", "Parra", "Bravo", "Gallardo", "Rojas", "Pardo", "Merino", "Franco", "Espinosa", "Izquierdo", "Lara", "Rivas", "Silva", "Rivera", "Casado", "Arroyo", "Redondo", "Camacho", "Rey", "Vera", "Otero", "Luque", "Galan", "Montes", "Rios", "Sierra", "Segura", "Carrillo", "Marcos", "Marti", "Soriano", "Mendoza"];
	var rand_first = Math.floor(Math.random()*firstname.length); 
	var rand_last = Math.floor(Math.random()*lastname.length); 
	return ""+firstname[rand_first]+" "+lastname[rand_last];
}

function updateTeamsTable() {
    listaEquipos = [];
    var lista = document.getElementById("TablaListaEquipos");
    removeElementsByClass('teamName');

    
    for (let i = 0; i < 12; i++) {
        var name = GeneradorNombres();
        listaEquipos.push("" + name);
        var fila = document.createElement("tr");
        var celda = document.createElement("td");

        fila.setAttribute('class', 'teamName');

        celda.appendChild(document.createTextNode("ID: "+(i+1)+ " | " + name));
        fila.appendChild(celda);

        lista.appendChild(fila);
    }

}

function CalcularTiempos() {
    if (listaEquipos.length == 0) {
        alert("No a agregado elementos");
        return 1;
    }

    const divResults = document.getElementById("GameResults");
    removeElementsByClass("gameStatus");

    const tbl = document.createElement('table');
    tbl.setAttribute('class', 'gameStatus');
    tbl.style.border = '1px solid black';
    
    // i para rondas
    for (let i = 0; i <= 6; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j <= listaEquipos.length; j++) {
            const td = tr.insertCell();
            
            if (i == 0 && j== 0 ) {
                td.appendChild(document.createTextNode('-----'));
            } else if (i == 0) {  
                // Primera Fila j
                //td.appendChild(document.createTextNode('Cabecera'));
                 td.appendChild(document.createTextNode(`${listaEquipos[j-1]}`));

            } else if (j == 0) { // Primera Columna i
                //td.appendChild(document.createTextNode('1ra Columna'));
                td.appendChild(document.createTextNode(`Ronda: ${i}`));

            } else { // Enmedio
                td.appendChild(document.createTextNode(`${getRandomFloat(0,5,2)} minutos`));
            }
            td.style.border = '1px solid black';
        }
    }
    divResults.appendChild(tbl);

}

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
  
    return parseFloat(str);
  }