function requiredElement() {
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var email = document.getElementById("email").value;
var m1 = document.getElementById("m1").value;
var m2 = document.getElementById("m2").value;

if(nom== "") {
alert("Veillez insérer votre Nom");
document.getElementById("nom").style.backgroundColor="red";
document.getElementById("nom").focus();
return false;
}
if(prenom == "") {
alert("Veillez insérer votre Prénom");
document.getElementById("prenom").style.backgroundColor="red";
document.getElementById("prenom").focus();
return false;
}
if(email == "") {
alert("Veillez insérer votre Email");
document.getElementById("email").style.backgroundColor="red";
document.getElementById("email").focus();
return false;
}

if(m1 == "") {
alert("Veillez entrer Le mot de passe");
document.getElementById("m1").style.backgroundColor="red";
document.getElementById("m1").focus();
return false;
}
if(m2 == "") {
alert("Veillez confirmer le mot de passe");
document.getElementById("m2").style.backgroundColor="red";
document.getElementById("m2").focus();
return false;
}
if (m1!=m2) {
alert("Les mots de passe ne correspondent pas.");
return false;
}
 

   


return true;
} 









function nomValidate() { 
var letters = /^[A-Za-z]+$/; 
var nom = document.getElementById("nom");
if(nom.value.match(letters)) { 
document.getElementById("nom").style.backgroundColor="white";
return true; 
} else { 
alert('Le nom ne doit contenir que des lettres'); 
document.getElementById("nom").style.backgroundColor="red";
document.getElementById("nom").focus();
return false; 
} 
}







function validateEmail(champsText){ 
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
if(champsText.value.match(mailformat)){ 
document.form.email.focus();
document.getElementById("email").style.backgroundColor="white"; 
return true;
}else{
alert("Veuillez insérer une adresse email valide!"); 
document.getElementById("email").style.backgroundColor="red";
document.form.email.focus(); 
return false;
}
} 






function validateForm(){
if (!requiredElement()){ 
return false;
}
else{
confirm("Toutes les données sont validées !, Voulez-vous les envoyer au serveur?");

} 
} 