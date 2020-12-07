$(document).ready(function() {
  setTimeout(function(){
	  setTimeout(function(){$(".introo").remove();}, 500);
	  $(".introo").addClass("opc");
	
  },1000);
});

function revealMessage(){
	document.getElementById("hiddenMessage").style.display ='block';
}