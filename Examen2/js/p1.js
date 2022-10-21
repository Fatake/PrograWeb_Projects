
var Usuarios = [["Pepito","1234"]];

function login() {

    let userName = $("#fuserName").val();
    let userPass = $("#fuserPass").val();

    console.log(userName);
    console.log(userPass);

    if (window.sessionStorage) {
        sessionStorage.setItem("user", userName);
        window.location.replace('index.html');
    } else {
        throw new Error('Tu Browser no soporta sessionStorage!');
    
    }
}


/*
$("#fuserName").val();
*/