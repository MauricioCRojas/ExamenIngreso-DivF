/*
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con 
un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer con PAMI mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final 
tiene un descuento del 25%, que solo mostramos si corresponde.
*/
function mostrar()
{


	let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let sexo;
	let precioPasajero=600;
	let contOSDE=0;
	let contPAMI=0;
	let contViejoOSDE=0;
	let flagMPMJ=0;
	let edadMPMJ;
	let nombreMPMJ;
	let tempMPMJ;
	let contPasajero=0;
	let precioBruto;
	let precioConDescuento;
	let seguir;
	let porcentajePAMI;

do{
	nombre= prompt("Ingrese su nombre");

	obraSocial=prompt("Ingrese su obra social PAMI/OSDE/otras");
	while (!(obraSocial=="PAMI" || obraSocial=="OSDE" || obraSocial=="otras")){
	obraSocial=prompt("Error. Ingrese su obra social PAMI/OSDE/otras");
	}
	edad = parseInt(prompt("Ingrese su edad"));
   while (isNaN(edad) || edad <=17){
   edad = parseInt(prompt("Error. Ingrese su edad"));
	}
  
	temperatura = parseFloat(prompt("Ingrese su temperatura"));
	while (isNaN(temperatura) || temperatura <=0){
	temperatura = parseFloat(prompt("Error. Ingrese su temperatura"));
	}
  
	sexo=prompt("Ingrese su sexo f/m");
	while (!(sexo=='f' || sexo=='m')){
	sexo=prompt("Error. Ingrese su sexo f/m");   
	}
	contPasajero++;
	switch (obraSocial){
		case "otras":
		  break;
		  case "PAMI":
			  contPAMI++;
			  if (sexo=='f' && (flagMPMJ ==0 || edad < edadMPMJ)){//B
				edadMPMJ=edad;
				nombreMPMJ=nombre;
				tempMPMJ=temperatura;
				flagMPMJ=1;
			  }
		break;
		case "OSDE":
		  contOSDE++;
		  if (edad > 60){//A
		  contViejoOSDE++;
		  }
		  break;
	  }
	  seguir=prompt("¿Quiere ingresar otro pasajero s/n?");
	}while (seguir=='s');


	  if (contViejoOSDE!=0){//A
		console.log("La cantidad de mayores a 60 con OSDE es de " + contViejoOSDE);
	  }
	  else {
		console.log("No se ingresaron mayores de 60 con OSDE");
	  }


	if (flagMPMJ !=0){//B
	console.log ("El nombre de la mujer con pami mas joven es "+nombreMPMJ + " y su temperatura es "+tempMPMJ);
	}
	  else {
	  console.log ("No se ingresaron mujeres con pami");
	}

	//C
precioBruto= contPasajero * precioPasajero;
console.log ("El precio total es "+ precioBruto);

//D

if (contPAMI!=0 ){
	porcentajePAMI= contPAMI *100 / contPasajero;
	console.log ("El porcentaje de pasajeros con PAMI sobre el total es de " + porcentajePAMI +" %, entonces aplica un descuento del 25%");
  }
  if (porcentajePAMI >=50){
  precioConDescuento= precioBruto - (precioBruto *0.25);
  console.log("El precio con descuento es de " + precioConDescuento);
  }
  else {
	console.log ("No se aplica descuento");
  }
}
