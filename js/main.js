console.log("test1");

var myRequest = new XMLHttpRequest();
myRequest.open('GET','http://dennistel.nl/movies');
myRequest.onload = function() {
  console.log(myRequest.responseText);
  var myData = myRequest.responseText;
  console.log(myData[0]);
};

myRequest.send();













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
