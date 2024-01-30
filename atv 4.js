let nota= prompt ("Insira uma nota de 0 a 100:");
if (nota<60){
console.log("Reprovado");
}
else if ( nota>60 && nota<74){
    console.log("Regular");
    alert("Regular");

}
else if(nota > 75 && nota<89){
console.log("bom");
alert("BOM");
}
else if(nota>90&&nota<100){
console.log("Excelente");
alert("Excelente");
}
else{
    console.log ("Favor informar uma nota valida exemplo de 10 a 100");
    alert("Favor informar uma nota valida exemplo de 10 a 100");
}