// Variabes globales
//const btnSesion = document.querySelector("#passwd");
document.getElementById("menuLogOut").addEventListener("click",logOut);

//Load
load();
function load(){
    password();
    //location.reload();
};

//Deslogeo
function logOut(){
    localStorage.clear();
    location.reload();
};

//Validación de Password

function password(){
    let user1 = JSON.parse(localStorage.getItem("registro"));
    let user2 = JSON.parse(localStorage.getItem("logeo"));
    if (user1 != null && user1 != undefined) {
        if (user1.password === user2.password && user1.nombre === user2.nombre) {
            document.getElementById("usuario").innerHTML = user1.nombre;
            logIn();
        }

    } else {
        return
    }
};

//Seting de Logeo
function logIn(){
    document.getElementById("menuLogIn").innerHTML = "";
    document.getElementById("menuLogOut").innerHTML = "Log Out";
    document.getElementById("calculadora").innerHTML = "Calculadora";
    document.getElementById("reloj").innerHTML = "Reloj";
    //location.href="index.html";
};

/**
 Barra Lateral - Titulo
 */
function mostrarNombre() {
    var misDatos = `
    <h2>Busquedas</h2>
`;
    return misDatos;
};

function imprimir() {
    var barLat = document.getElementById("barTitle");
    barLat.innerHTML = mostrarNombre();
};

imprimir(); 
