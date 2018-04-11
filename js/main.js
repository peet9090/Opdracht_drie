//console.log("test1");
var filmsLijst = document.getElementById('films');

//Eerste AJAX die geschreven is
var myRequest = new XMLHttpRequest();
myRequest.open('GET','http://dennistel.nl/movies');
myRequest.onload = function() {
  //console.log(myRequest.responseText);
  var myData = JSON.parse(myRequest.responseText);
  console.log(myData[0]);
  ophalenHTML(myData);
};
myRequest.send();



//button die meer films gaat weergeven
var btn = document.getElementById('btn');
//spreekt ID aan in html
btn.addEventListener("click", function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET','http://dennistel.nl/movies');
  myRequest.onload = function() {
    //console.log(myRequest.responseText);
    var myData = JSON.parse(myRequest.responseText);
    //console.log(myData[0]);
    ophalenHTML(myData);
  };
  myRequest.send();
});

function ophalenHTML(data){
//Deze functie wordt uitgevoerd wanneer er op var btn wordt geklikt.
  var htmlStuk = "";

  for (i = 1; i < data.length; i++) {
    htmlStuk += "<div class='img" + [i] + "'><span>" + data[i].release_date+ "</span>";
    htmlStuk += "<h3>" + data[i].title + "</h3>";
    htmlStuk += "<img src='" + data[i].cover + "'>" + "</img></div>";

//    console.log("test1");
// de api content wordt geselecteerd
  }
  filmsLijst.insertAdjacentHTML('beforeend', htmlStuk);
}
// insert de api in html
//laat doormiddel van for loop alle content in


/*
var scrollen = document.getElementById('films');
//console.log("portfolio " + portfolio)

window.addEventListener("scroll", function(){
  //console.log("window: " + window.scrollY);
  //console.log("portfolio: " + portfolio.offsetTop);

	if(window.scrollY > scrollen.offsetTop - 100){
    //console.log("test");
    //scroll funtion start wanneer je begint te scrollen
    scrollen.classList.add('action');
    // doormiddel van deze action add die de class ection
  };

})

*/

//console.log("portfolio " + portfolio)

window.addEventListener("scroll", function(){
  //console.log("window: " + window.scrollY);
  //console.log("portfolio: " + portfolio.offsetTop);


  if(window.scrollY > document.querySelector('.img1').offsetTop - 100){
    document.querySelector('.img1').classList.add('action');
  };

  if(window.scrollY > document.querySelector('.img2').offsetTop - 100){
    document.querySelector('.img2').classList.add('action');
  };

  if(window.scrollY > document.querySelector('.img3').offsetTop - 100){
    document.querySelector('.img3').classList.add('action');
  };

  if(window.scrollY > document.querySelector('.img4').offsetTop - 100){
    document.querySelector('.img4').classList.add('action');
  };

  if(window.scrollY > document.querySelector('.img5').offsetTop - 100){
    document.querySelector('.img5').classList.add('action');
  };

})


/*
var count = 1;

window.addEventListener("scroll", function(){
  //console.log("window: " + window.scrollY);
  //console.log("portfolio: " + portfolio.offsetTop);

for ( i = 1; i > 0; i++ ) {
  if(window.scrollY > document.querySelector('.img' + count++ +'').offsetTop - 100){
    document.querySelector('.img' + count++ + '').classList.add('action');
  }
}

})

*/






//bronnen:
//peet9090.github.io/Opdracht_drie/
//dennistel.nl/movies
//moodle.cmd.hva.nl/mod/page/view.php?id=21392
//developer.mozilla.org/en-US/docs/Web/API/UIEvent
//bokardo.com/principles-of-user-interface-design/
//www.youtube.com/watch?v=rJesac0_Ftw
//developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
//
