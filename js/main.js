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
//html toevoegen aan de html
  var htmlStuk = "";

  for (i = 1; i < data.length; i++) {
    htmlStuk += "<span>" + data[i].release_date+ ".</span>";
    htmlStuk += "<h3>" + data[i].title + ".</h3>";
    htmlStuk += "<img src='" + data[i].cover + "'>" + ".</img>";
//    console.log("test1");
  }
  filmsLijst.insertAdjacentHTML('beforeend', htmlStuk);
}






var scrollen = document.getElementById('films');
//console.log("portfolio " + portfolio)

window.addEventListener("scroll", function(){
  //console.log("window: " + window.scrollY);
  //console.log("portfolio: " + portfolio.offsetTop);

	if(window.scrollY > scrollen.offsetTop - 100){
    //console.log("test");
    scrollen.classList.add('action');



  };

})






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
