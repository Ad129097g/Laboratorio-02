//LABORATORIO 02

//ejercicio 01

const formulario = document.querySelector('form');
formulario.addEventListener('submit', function(event) {
	event.preventDefault(); // Evita que la página se recargue al enviar los datos y se reinicie --- 
	const nombre = document.getElementById('nombre').value;
	const email = document.getElementById('email').value;
	document.getElementById('datos').innerHTML = `Nombre: ${nombre} <br> Email: ${email}`;
    document.getElementById('botarnombre').innerHTML = `${nombre}`;
    document.getElementById('botaremail').innerHTML = `${email}`;
});

//Ejercicio 02

function calcular() {
	// Obtener los valores de los cuatro números ingresados ---- guar*var variable 
	var one = parseFloat(document.getElementById("one").value);
	var two = parseFloat(document.getElementById("two").value);
	var three = parseFloat(document.getElementById("three").value);
	var four = parseFloat(document.getElementById("four").value);
  
	//suma
	var suma = one + two;
  
	//producto
	var producto = three * four;
  
	// resultado
	document.getElementById("resultado").innerHTML = "La suma de los dos primeros números es: " + suma + "<br>El producto del tercer y cuarto número es: " + producto;
  }
  
//Ejercicio 03
function ejer3(){
		// Pedir al usuario que ingrese los dos números
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);

	// Verificar si el primer número es mayor que el segundo
	if (num1 > num2) {
		// Calcular la suma y la diferencia
		var suma = num1 + num2;
		var diferencia = num1 - num2;

		// Mostrar los resultados
		document.getElementById("resultadoejer3").innerHTML = "<br>La suma de los dos números es: " + suma + ". La diferencia de los dos números es: " + diferencia + ".</p>";
	} else {
		// Calcular el producto y la división
		var producto = num1 * num2;
		var division = num1 / num2;

		// Mostrar los resultados
		// resultado
	document.getElementById("resultadoejer3").innerHTML = "<br>El producto de los dos números es: " + producto + ". La división del primer número respecto al segundo es: " + division + ".</p>";
	}

}

//Ejercicio 04

function ejer4(){
	var cal1 = parseFloat(document.getElementById("cal1").value);
	var cal2 = parseFloat(document.getElementById("cal2").value);
	var cal3 = parseFloat(document.getElementById("cal3").value);

	var promedio = (cal1 + cal2 + cal3)/3; 

	if (promedio>=4){
		document.getElementById("resultadoejer4").innerHTML = "<br>Regular";
	} else {
		document.getElementById("resultadoejer4").innerHTML = "<br>Reprobado";
	}
}

//Ejercicio 05

function ejer5(){
	var pri = parseFloat(document.getElementById("pri").value);
	var seg = parseFloat(document.getElementById("seg").value);
	var ter = parseFloat(document.getElementById("ter").value);
	
	if ( pri > seg , pri > ter){
		document.getElementById("resultadoejer5").innerHTML = "<br>El numero mayor es : " + pri + ".";
	} else if ( seg > pri , seg > ter){
		document.getElementById("resultadoejer5").innerHTML = "<br>El numero mayor es: " + seg + ".";
	} else {
		document.getElementById("resultadoejer5").innerHTML = "<br> El numero mayor es: " + ter + ".";
	}
}

