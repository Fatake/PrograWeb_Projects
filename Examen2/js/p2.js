
var Comidas = [
    ["pizza",100,"comida"],//0
    ["Arrachera",200,"Carne"],//1
    ["Pan",50,"Aperitivo"],//2
    ["Flan",150,"Postre"],//]3
    ["Huevo refritos",175,["comida"]]//4
];
$( document ).ready(function() {
    pintar();
});

function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function borrarElemento(){
    var valor = $("#inputtoDelete").val();
    console.log("Se va a borrar: "+valor);
    Comidas.splice(index);
    pintar();
}


function pintar() {
    removeElementsByClass('card text-white bg-primary mb-3');
    let i = 0;
    Comidas.forEach(element => {
        // create a new div element
        var principalDiv = document.createElement("div");
        principalDiv.setAttribute('class', 'card text-white bg-primary mb-3');
        principalDiv.setAttribute('style','max-width: 20rem;');
        principalDiv.setAttribute('id','infoTable_'+i);

        // and give it some content
        var divName = document.createElement("div");
        divName.setAttribute('class','card-header');
        divName.appendChild(document.createTextNode(element[0]));

        var divBody = document.createElement("div");
        divBody.setAttribute('class','card-body');

        var cost = document.createElement("h4");
        cost.setAttribute('class','card-title');
        cost.appendChild(document.createTextNode("Costo: "+element[1]));

        var cat = document.createElement("p");
        cat.setAttribute('class','card-text');
        cat.appendChild(document.createTextNode("Categoria: "+element[2]));

        divBody.append(cost);
        divBody.append(cat);
        // add the text node to the newly created div
        principalDiv.appendChild(divName);
        principalDiv.appendChild(divBody);

        let currentDivlet;
        if (i == 0) {
            currentDiv = document.getElementById("init");
        } else{
            currentDiv = document.getElementById('infoTable_'+(i-1));
        }

        document.body.insertBefore(principalDiv, currentDiv);
        i++;

    });
    $("#NumeroElementos").val(Comidas.length);
}