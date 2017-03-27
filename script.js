function myFunction(){
  var x= document.getElementById("textbox").value;
  var sentence= 0;
  var averagewords= 0;
  var spaces= 0;
  var wordcounter= 1;


  for (i=0; i < x.length; i++) {
    if (x[i] ==''){
      spaces++;
      wordcounter++;
    }
    if (x[i] =='.' || x[i]=='?'|| x[i] =='!') {
      sentence++;
    }
}

averagewords= wordcounter/sentence;
document.getElementById("row1").innerHTML = "There are this many " + averagewords;
document.getElementById("row2").innerHTML = "There are this many " + sentence;
document.getElementById("row3").innerHTML = "There are this many " + spaces;
document.getElementById("row4").innerHTML = "There are this many " + words;
}
