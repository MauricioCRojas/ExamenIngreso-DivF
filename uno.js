/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos
*/
function mostrar()
{

	let producto;
	let precio;
	let unidades;
	let categoria;

	let acumAlcohol=0;
	let acumIac=0;
	let acumQuat=0;
	let contAlcohol=0;
	let contIac=0;
	let contQuat=0;
	let promedioQuat=0;
	let promedioIac=0;
	let promedioAlcohol=0;
	let flag=0;
	let precioTipoMasCaro;
	let fabricanteTipoMasCaro;
	let categoriaMasCaro;
	let acumDesinfectante=0;
	let acumBactericida=0;
	let acumDetergente=0;
	let acumDetergenteBarato=0;



	for ( let i = 1 ; i <=2 ; i++){
	producto = prompt("Ingrese producto a comprar: ALCOHOL/IAC/QUAT");
	while ( !(producto == "ALCOHOL" || producto == "IAC" || producto == "QUAT")){
		producto = prompt("Error. Ingrese producto a comprar:  ALCOHOL/IAC/QUAT");
	}
	precio = parseFloat (prompt("Ingrese precio"));
	while (isNaN(precio) || precio < 100 || precio > 300){
		precio = parseFloat (prompt("Error.Ingrese precio"));
	}
	unidades = parseInt (prompt("Ingrese cantidad de unidades"));
	while (isNaN(unidades) || unidades <= 0 || unidades > 1000){
		unidades = parseInt (prompt("Error. Ingrese cantidad de unidades"));
	}
	categoria= prompt("Ingrese categoria desinfectante/bactericida/detergente");
	while (!(categoria == "desinfectante" || categoria == "bactericida" || categoria == "detergente")){
	categoria= prompt("Error. Ingrese categoria desinfectante/bactericida/detergente");
	}
	fabricante= prompt("Ingrese fabricante");

	switch (producto){
		case "ALCOHOL"://A
			acumAlcohol+= unidades;
			contAlcohol++
			break;
	
		case "IAC":
			acumIac+= unidades;
			contIac++
			break;
		case "QUAT":
			acumQuat+= unidades;
			contQuat++
			break;		
	}

	switch(categoria){//B
		case "bactericida":
			acumBactericida+=unidades;
			break;
		case "desinfectante":
			acumDesinfectante+=unidades;
			break;
		case "detergente":
			acumDetergente+=unidades;
			if (precio <= 200){//C
				acumDetergenteBarato++;
			}
			break;



	}
	if (flag==0 || precio > precioTipoMasCaro){//D
		precioTipoMasCaro=precio;
		categoriaMasCaro = categoria;
		fabricanteTipoMasCaro = fabricante;
		flag =1;
		}
	}




	if (contQuat!=0){//A
		promedioQuat= acumQuat / contQuat;
		console.log ("El promedio por compra de quat es: " + promedioQuat);
	}
	else {
		console.log ("No se ingresaron productos quat");
	}
	if (contIac!=0){//A
		promedioIac= acumIac / contIac;
		console.log ("El promedio por compra de Iac es: " + promedioIac);
	}
	else {
		console.log ("No se ingresaron productos iac");
	}
	if (contAlcohol!=0){//A
		promedioAlcohol= acumAlcohol / contAlcohol;
		console.log ("El promedio por compra de Alcohol es: " + promedioAlcohol);
	}
	else {
		console.log ("No se ingresaron productos Alcohol");
	}



	if (acumBactericida > acumDesinfectante && acumBactericida > acumDetergente){//B
		console.log ("La categoria con mas unidades en la compra es Bactericida");
		}
		else if (acumDesinfectante >= acumBactericida && acumDesinfectante > acumDetergente){
			console.log ("La categoria con mas unidades en la compra es Desinfectante ");
		}
		else {
			console.log ("La categoria con mas unidades en la compra es Detergente");
		}

		
		if (acumDetergenteBarato!=0){//C
			console.log ("Se compraron de detergentes menor o igual a 200$ la cantidad de " + acumDetergenteBarato);
		}
		else {
			console.log ("No se compro detergente menor o igual a 200$");
		}


		//D
console.log ("La categoria del mas caro es " +categoriaMasCaro+" y su fabricante es " + fabricanteTipoMasCaro);
}
