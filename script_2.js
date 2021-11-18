var nombre = prompt("de quel nombre veux-tu calculer la factorielle");

function facto(nombre){
  i=1;
  somme = 1;
  while (i<=nombre){
    somme *=i;
    i+=1;
  }
 console.log(somme);
}
facto(nombre)
