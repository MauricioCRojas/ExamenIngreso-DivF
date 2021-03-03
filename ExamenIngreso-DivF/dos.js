/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una 
division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que trabajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo

*/


function mostrar()
{

  let nombre;
  let situacionLaboral;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;

  let mejorPromedioSE=0;
  let nombreMPSE;
  let flagNMPSE=0;
  let seguir;

  let flagMVSE=0;
  let edadMVSE;
  let nombreMVSE;

  let contT=0;
  let contB=0;
  let contSE=0;
  let acumT=0;
  let acumB=0;
  let acumSE=0;
  let promedioT=0;
  let promedioB=0;
  let promedioSE=0;

  let flagMenosCM=0;
  let menosCM;
  let edadMenosCM;
  let nombreMenosCM;


do{
  nombre= prompt("Ingrese su nombre");

  situacionLaboral = prompt("Ingrese su situacion laboral buscando/trabajando/solo estudiante");
  while (!(situacionLaboral=="buscando" || situacionLaboral== "trabajando" || situacionLaboral=="solo estudiante")){
 situacionLaboral = prompt("Error. Ingrese su situacion laboral buscando/trabajando/solo estudiante");
  }
   
  cantidadMaterias= parseInt(prompt("Ingrese cantidad de materias entre 1 y 7"));
  while(isNaN (cantidadMaterias) || cantidadMaterias <=0 || cantidadMaterias >7){
  cantidadMaterias= parseInt(prompt("Error. Ingrese cantidad de materias entre 1 y 7"));
  }
 
  sexo=prompt("Ingrese su sexo f/m/nb");
  while (!(sexo=='f' || sexo=='m' || sexo=="nb")){
  sexo=prompt("Error. Ingrese su sexo f/m/nb");   
  }
 
  notaPromedio=parseFloat(prompt("Ingrese su promedio de notas"));
  while (isNaN(notaPromedio) || notaPromedio >10 || notaPromedio<=0){
  notaPromedio=parseFloat(prompt("Error. Ingrese su promedio de notas"));
  }
 
 
  edad = parseInt(prompt("Ingrese su edad"));
  while (isNaN(edad)){
    edad = parseInt(prompt("Error. Ingrese su edad"));
    
  }
  
  
  //A
  if (situacionLaboral=="solo estudiante" && (flagNMPSE== 0 || notaPromedio >mejorPromedioSE)){
    nombreMPSE=nombre;
    mejorPromedioSE= notaPromedio;
    flagNMPSE=1;
  }
  
  
  if (situacionLaboral=="solo estudiante" && (flagMVSE==0 || edad > edadMVSE)){//B
    nombreMVSE= nombre;
    edadMVSE=edad;
    flagMVSE=1;
  }
  
  
  switch(situacionLaboral){
    case "solo estudiante":
      contSE++;
      acumSE+= notaPromedio;
      break;
      case "buscando":
        contB++;
        acumB+= notaPromedio;
        break;
        case "trabajando":
          contT++;
          acumT+=notaPromedio;
          break;
        }
        
        if (situacionLaboral=="buscando" && (flagMenosCM==0 || cantidadMaterias < menosCM)){//D
          menosCM=cantidadMaterias;
          edadMenosCM=edad;
          nombreMenosCM=nombre;
          flagMenosCM=1;
        }
        seguir=prompt("¿Quiere ingresar otro dato s/n");
      }while(seguir=='s');
      
      
      //A y //B
      if (mejorPromedioSE!=0){
        console.log ("El nombre del mejor promedio de solo estudiantes es " + nombreMPSE);
  console.log ("El nombre del mas viejo de los alumnos solo estudiantes "+ nombreMVSE);
}
else {
  console.log ("No se ingresaron alumnos solo estudiantes");
}

//C
if (contT !=0){
  promedioT= acumT/contT;
  console.log ("El promedio de notas de trabajadores es " + promedioT);
}
else {
  console.log ("No se ingresaron alumnos trabajadores");
}
if (contB !=0){
  promedioB= acumB/contB;
  console.log ("El promedio de notas de alumnos buscando trabajo es " + promedioB);
}
else {
  console.log ("No se ingresaron alumnos buscando trabajo");
}
if (contSE !=0){
  promedioSE= acumSE/contSE;
  console.log ("El promedio de notas de solo estudiantes es " + promedioSE);
}

//D
if (flagMenosCM !=0){
  console.log ("El nombre de quien cursa menos materias y busca trabajo es " + nombreMenosCM + " y su edad es " + edadMenosCM);
}
}
