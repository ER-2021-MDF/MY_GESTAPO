var attivo = true;
var mobile = false;
var tablet = false;
var dimensione = window.matchMedia("(max-width: 600px)"); 
var dimensione2 = window.matchMedia("(max-width: 1023px)"); 

//controlla le dimensioni dello schermo e restituisce la vista correttta
function controlloMediaQuery() {
  if (dimensione.matches) { // If media query matches
    mobile = true;
  } else if (dimensione2.matches){
    mobile = false;
    tablet = true;
  }
  else{
    mobile = false;
    tablet = false;
  }
  
  //vestiti();
  
  //fa partire l'animazione dei disegnini, non utilizzato per adesso
  //scritta();
} 

//animazione per ruotare la card 
function flip(card){

	var t2 = gsap.timeline({});
	t2.to("#"+card, {duration:1, rotationY: "+=180"});

}

//controlla che la password della missione sia corretta
function passwordCheck(id, password){
	
	let card = document.getElementById(id).parentNode.parentNode.id;
	
	switch(id){
	
	case "arsenaleButton":
		if(password.toLowerCase() === "vai"){
			flip(card);
		}
		else alert("PASSWORD ERRATA");
		break;
		
	case "piazzaButton":
		if(password.toLowerCase() === "vai"){
			flip(card);
		}
		else alert("PASSWORD ERRATA");
		break;
	
	case "palazzoButton":
		if(password.toLowerCase() === "vai"){
			flip(card);
		}
		else alert("PASSWORD ERRATA");
		break;
		
	case "mercatoButton":
		if(password.toLowerCase() === "vai"){
			flip(card);
		}
		else alert("PASSWORD ERRATA");
		break;
		
	case "tribunaleButton":
		if(password.toLowerCase() === "vai"){
			flip(card);
		}
		else alert("PASSWORD ERRATA");
		break;
	
	default:
		alert("ERRORE NEL CODICE");
		break;
	}
		
	
}

//loader, non utilizzato
function carica(){
    setTimeout(function(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("vista").style.display = "inline"; }, 1000);
} 


//non utilizzata per adesso, prototipo per animazione sblocco nuova missione
function unlockLevel(){
	
	switch(getElementById("").value){
		
		case "x": 
			alert("Nuova missione disponibile");
			document.getElementsByClassName("helen")[0].style.display="inline-block";
			document.getElementsByClassName("helen")[0].style.marginTop="110%";
			document.getElementsByClassName("helen2")[0].style.display="inline-block";
			document.getElementsByClassName("helen2")[0].style.marginTop="110%";
		break;
		case "y": 
			alert("Nuova missione disponibile");
			document.getElementsByClassName("helen")[0].style.display="inline-block";
			document.getElementsByClassName("helen")[0].style.marginTop="110%";
			document.getElementsByClassName("helen2")[0].style.display="inline-block";
			document.getElementsByClassName("helen2")[0].style.marginTop="110%";
		break;
		default:
		alert(livello);
	}
	
}
