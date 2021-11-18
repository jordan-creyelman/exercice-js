var nombre = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
function pyramide(nombre){
  i=nombre
  etoile=1
  while (i>0){
    console.log((" ").repeat(i) + ("#").repeat(etoile));
    i-=1
    etoile+=1
  }
}
pyramide(nombre)