// Login fake
document.getElementById("registrar").addEventListener("click",setRegistro);
document.getElementById("iniciar").addEventListener("click",setInicio);

//Registración

function setRegistro(){
    //e.preventDefault();
    getInputReg();
};

function getInputReg(){
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    if (nombre !="" && email !="" && password !="") {
        let user1 = {
            nombre:nombre,
            email:email,
            password:password
        };
        return setDatosLocalStorage1(user1);
    } else {
        mensajeCampos();
    }
};

function setDatosLocalStorage1(user1) {
    localStorage.setItem("registro", JSON.stringify(user1));
};

//Iniciación de Sesión
function setInicio(){
    //e.preventDefault();
    getInputInc();
};

function getInputInc(){
    let user = JSON.parse(localStorage.getItem("registro"));
    let nombre = document.getElementById("user").value;
    let password = document.getElementById("passwd").value;
    if (nombre !="" && password !="") {
        if (user.nombre === nombre && user.password === password) {
            let user2 = {
                nombre:nombre,
                password:password
            };
            setDatosLocalStorage2(user2);
        } else {
            mensaje();
        }
        
    } else {
        mensajeCampos();
    }
};

function setDatosLocalStorage2(user2) {
    localStorage.setItem("logeo", JSON.stringify(user2));
};


//Mensajes
function mensaje(){
    var mensaje = "<h3>Usuario y/o Contraseña incorrecta</h3>"
    document.getElementById("mensaje").innerHTML = mensaje;
};
function mensajeCampos(){
    var mensaje = "<h3>Completar los datos obligatorios</h3>"
    document.getElementById("mensaje").innerHTML = mensaje;
}
