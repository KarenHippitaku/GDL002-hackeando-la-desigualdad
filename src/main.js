//'use strict'

//window.addEventListener("load", () => {

function showNextSection(){
  document.getElementById("professionBlock").style.display = 'block';
  document.getElementById("introText").style.display = "none";
}
document.getElementById("professionBtn btn").addEventListener('click',showNextSection);


function showSectionArt(){
  document.getElementById("example").style.display = 'block';
}
document.getElementById("artCards").addEventListener('click', showSectionArt);

function showSectionPolitics(){
  document.getElementById("example2").style.display = 'block';
  document.getElementById("example").style.display = 'none';
}
document.getElementById("politicsCards").addEventListener('click', showSectionPolitics);

function showSectionScience(){
  document.getElementById("example3").style.display = 'block';
  document.getElementById("example2").style.display = 'none';
}
document.getElementById("scienceCards").addEventListener('click', showSectionScience);

  
//})



