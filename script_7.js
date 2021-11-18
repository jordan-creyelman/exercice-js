var phrase = prompt("quel est la phrase");
function bot(phrase){
  console.log(phrase.length)
  var fornite =fortnite(phrase);
  var point_interrogation = phrase[phrase.length -1];
  if (point_interrogation=="?"){
    console.log("Ouais Ouais...");
  }
  else if (phrase.length==0)
  {
    console.log("t'es en PLS ?");
  }
  else if(phrase==phrase.toUpperCase()){ 
    console.log("Pwa,calme-toi...");
  }

  else if (fornite==true){
    console.log("on s' fait une partie soum-soum ?");

  }else{
    console.log("balek");
  }

}
function fortnite(phrase){
  var array=phrase.split(" ");
  var i = 0;
  var fornite=false;
  while (i<array.length){
    if (array[i]=="Fornite"){
      fornite=true
    }
    i+=1
  }
  return fornite
}

bot(phrase); 
