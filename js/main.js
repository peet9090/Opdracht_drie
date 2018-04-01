//console.log("test1");

var myRequest = new XMLHttpRequest();
myRequest.open('GET','http://dennistel.nl/movies');
myRequest.onload = function() {
  console.log(myRequest.responseText);
};

myRequest.send();
