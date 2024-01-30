let nota = prompt ("Insira uma nota de 0 a 100");
switch (true){
case nota>=90 && nota<=100:
conceito="A";
break;
case nota>=80&& nota<90:
CONCEITO="B";
break
case nota>=70&&nota<80:
conceito="C";
break;
case nota>=60&&nota <70:
conceito="D";
break
case nota>=0&& notan <60:
conceito="F";
break
default:
    conceito="Nota invalida";
}
console.log("Conceito:"+conceito);