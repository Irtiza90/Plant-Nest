function toggleSignup(){
	document.getElementById("login-toggle").style.backgroundColor="#fff";
	 document.getElementById("login-toggle").style.color="#222";
	 document.getElementById("signup-toggle").style.backgroundColor="#70c745";
	 document.getElementById("signup-toggle").style.color="#fff";
	 document.getElementById("login-form").style.display="none";
	 document.getElementById("forgot-form").style.display="none";
	 document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
	 document.getElementById("login-toggle").style.backgroundColor="#70c745";
	 document.getElementById("login-toggle").style.color="#fff";
	 document.getElementById("signup-toggle").style.backgroundColor="#fff";
	 document.getElementById("signup-toggle").style.color="#222";
	 document.getElementById("signup-form").style.display="none";
	 document.getElementById("forgot-form").style.display="none";
	 document.getElementById("login-form").style.display="block";
 }

 function toggleForgot(){
	document.getElementById("login-toggle").style.backgroundColor="#70c745";
	document.getElementById("login-toggle").style.color="#fff";
	document.getElementById("signup-toggle").style.backgroundColor="#fff";
	document.getElementById("signup-toggle").style.color="#222";
	document.getElementById("signup-form").style.display="none";
	document.getElementById("login-form").style.display="none";
	document.getElementById("forgot-form").style.display="block";

}

$(document).ready(function() {
	var hash = window.location.hash;
	if (hash === '#myModal') {
	  $('#myModal').modal('show');
	}
  });
  
 