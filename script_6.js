 var adnn = "CCGUCGUUGCGCUACAGC";
 var adntwo="CCUCGCCGGUACUUCUCG";
 function adn(mots){
  var i =0;
  arn= "";
 while (i<mots.length){
  if(mots[i]=="U"&&mots[i+1]=="C"&&mots[i+2]=="U"||mots[i]=="U"&&mots[i+1]=="C"&&mots[i+2]=="C"||mots[i]=="U"&&mots[i+1]=="C"&&mots[i+2]=="A"||mots[i]=="U"&&mots[i+1]=="C"&&mots[i+2]=="G"||mots[i]=="U"&&mots[i+1]=="G"&&mots[i+2]=="U"||mots[i]=="A"&&mots[i+1]=="G"&&mots[i+2]=="C"){
    arn+="sérine ";
  }else if(mots[i]=="C"&&mots[i+1]=="C"&&mots[i+2]=="U"||mots[i]=="C"&&mots[i+1]=="C"&&mots[i+2]=="C"||mots[i]=="C"&&mots[i+1]=="C"&&mots[i+2]=="A"||mots[i]=="C"&&mots[i+1]=="C"&&mots[i+2]=="G"){
     arn+="Proline ";
  }else if(mots[i]=="U"&&mots[i+1]=="U"&&mots[i+2]=="A"||mots[i]=="U"&&mots[i+1]=="U"&&mots[i+2]=="G"){
     arn+="Leucine ";
  }else if(mots[i]=="U"&&mots[i+1]=="U"&&mots[i+2]=="U"||mots[i]=="U"&&mots[i+1]=="U"&&mots[i+2]=="C"){
     arn+="Phénylalanine "
  }else if (mots[i]=="C"&&mots[i+1]=="G"&&mots[i+2]=="U"||mots[i]=="C"&&mots[i+1]=="G"&&mots[i+2]=="C"||mots[i]=="C"&&mots[i+1]=="G"&&mots[i+2]=="A"||mots[i]=="C"&&mots[i+1]=="G"&&mots[i+2]=="G"||mots[i]=="A"&&mots[i+1]=="G"&&mots[i+2]=="A"||mots[i]=="A"&&mots[i+1]=="G"&&mots[i+2]=="G"){
     arn+="Arginine ";
  }else{
     arn+="Tyrosine ";
}
i+=3

 }
 console.log(arn)
 }
 
 adn(adnn);
 adn(adntwo);


