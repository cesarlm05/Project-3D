reloj();

function reloj(){
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();

    horaImprimible = hora + " : " + minuto + " : " + segundo;

    document.getElementById("time").innerHTML = horaImprimible;

    setTimeout("reloj()",1000);
};