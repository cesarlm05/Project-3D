const botones = document.querySelector('.teclas');
//Función autoejecutable
(()=>{
    botones.addEventListener('click',calcular);
})();

function calcular(e){
    e.preventDefault();
    const tecla = e.target.id;

    switch (tecla) {
        case ('n1'):
            n1();
            break;
        case ('n2'):
            n2();
            break;
        case ('n3'):
            n3();
            break;
        case ('n4'):
            n4();
            break;
        case ('n5'):
            n5();
            break;
        case ('n6'):
            n6();
            break;
        case ('n7'):
            n7();
            break;
        case ('n8'):
            n8();
            break;
        case ('n9'):
            n9();
            break;
        case ('n0'):
            n0();
            break;
        case ('decimo'):
            dm();
            break;
        case ('ce'):
            ce();
            break;
        case ('ejecutar'):
            showResult();
            break;
        case ('s'):
            sumar();
            break;
        case ('r'):
            restar();
            break;
        case ('m'):
            multiplicar();
            break;
        case ('d'):
            dividir();
            break;
        default:
            break;
    }
};
/*
 Calculadora - Numeros
 */
function n1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n1").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
function n2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n2").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
function n3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n3").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
function n4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n4").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
function n5() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n5").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
function n6() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n6").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
function n7() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n7").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
function n8() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n8").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
function n9() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n9").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
function n0() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n0").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
function dm() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("decimo").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};
/*
 Calculadora - Opraciones
 */
function sumar() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("s").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};

function restar() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("r").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};

function dividir() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("d").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
};

function multiplicar() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("m").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  sumado
};
/*
 Calculadora - Limpiar pantalla
 */
function ce() {
    let actual = "";
    document.getElementById('resultado').innerHTML = actual;        
};
/*
 Calculadora - Resultado
 */
function showResult() {
	let actual = document.getElementById('resultado').innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("÷");
	let mult = actual.indexOf("x");
	if (suma !== -1) {
		arr = actual.split("+",2);
		res = parseFloat(arr[0]) + parseFloat(arr[1]);
        document.getElementById("resultado").innerHTML = res;
        
	} else if (resta !== -1) {
		arr = actual.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	} else if (div !== -1) {
		arr = actual.split("÷",2);
		res = arr[0] / arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	} else if (mult !== -1) {
		arr = actual.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("resultado").innerHTML = res;		
	}
};