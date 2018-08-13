 
 // grabbing the hidden page content
  var headlines = document.querySelectorAll(".newsbody");
  var tenLinks = document.querySelectorAll(".newslinks");


  // putting content into p with respective classes

 var links = document.querySelectorAll(".headline"); 
 var a_tags = document.querySelectorAll(".headline_links");
 var content = document.querySelectorAll(".contents");
 var trlinks = document.querySelectorAll("li");
 var writeHere = document.querySelectorAll("p");
 var p = document.getElementsByTagName("p")[0];
 var moreInfo = document.querySelectorAll(".learnMore");
var a_tags = "";

var scoop = function(){
 	for (var i =0; i < headlines.length; i++){

 		if (a_tags[i]){
		
		a_tags[i].href = headlines[i].href;
		}	

	if(links[i]){
		 links[i].innerHTML = headlines[i].innerHTML;
		//links[i].innerHTML = tenLinks[i].textContent;
		}	
	}}