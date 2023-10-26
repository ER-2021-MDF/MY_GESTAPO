var attivo = true;
var mobile = false;
var tablet = false;
var dimensione = window.matchMedia("(max-width: 600px)"); 
var dimensione2 = window.matchMedia("(max-width: 1023px)"); 

var counter = "start";

//controlla le dimensioni dello schermo e restituisce la vista correttta
async function controlloMediaQuery() {
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
  
  //fa partire l'animazione dei disegnini, non utilizzato per adesso
  //scritta();
  
  sbloccaSfida("start");
  
} 

//controlla che la password della missione sia corretta
function passwordCheck(password){
	
	switch(password){
	
	case "vai":
		if(counter.toLowerCase() === "arsenale"){
			sbloccaSfida(counter);
		}
		else alert("PASSWORD ERRATA");
		break;
		
	case "piazza":
		if(password.toLowerCase() === "vai"){
			sbloccaSfida(counter);
		}
		else alert("PASSWORD ERRATA");
		break;
	
	case "palazzo":
		if(password.toLowerCase() === "vai"){
			sbloccaSfida(counter);
		}
		else alert("PASSWORD ERRATA");
		break;
		
	case "mercato":
		if(password.toLowerCase() === "vai"){
			sbloccaSfida(counter);
		}
		else alert("PASSWORD ERRATA");
		break;
		
	case "tribunale":
		if(password.toLowerCase() === "vai"){
			sbloccaSfida(counter);
		}
		else alert("PASSWORD ERRATA");
		break;
	case "start":
		sbloccaSfida(counter);
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

function sbloccaSfida(sfida){
	
	var titolo = document.getElementById("titolo");
	var descrizione = document.getElementById("descrizione");
	var testo = document.getElementById("testoSfida");
	var foto = document.getElementById("foto");
	var inputIndizio = document.getElementById("inputIndizio");
	
	
	document.getElementById("casella").style.visibility = "hidden";
	endCursor(descrizione);
	endCursor(testo);
	endCursor(inputIndizio);
	
	let title;
	let desc;
	let text;
	let img;
	let indizio;
	let time = 0;
	
	sfida = sfida.toLowerCase();
	
	switch(sfida){
		
		// ----- PER LE SFIDE ----- 
		
		case "arsenale":
			title = "CORRI";
			
			desc = "Senza armi non potranno pi\u00F9 minacciarci. Facciamo saltare in aria il loro arsenale, "+
					"piazziamo delle bombe lungo tutto il perimetro senza farci prendere";
			
			text = "Fai un giro completo del campo d\u0027erba di Piazza d\u0027Armi. Il cameramen deve stare PER TUTTO IL TEMPO " +
					"a riprendervi in un punto abbastanza rialzato da potervi filmare per l\u0027interno tragitto. "+
					"I componenti della squadra \(escluso il cameraman\) faranno un giro a testa a mo di staffetta. "+
					"Il video serve a testimoniare che non bariate e a calcolare il tempo impiegato. "+
					"Se barate lo fate di nuovo :)";
			
			indizio = "Indizio: ti verr\u00E0 fornito alla fine della sfida";			
		break;
		
		case "piazza":
			title = "IL DISCORSO";
		
			desc = "Per vincere non serve solo la forza ma anche l\u0027appoggio del popolo";
		
			text = "Scrivi una poesia con rima baciata al sovrano, minimo 16 versi usando le parole: intelligenza, maest\u00E0, segreto, tarallo, scafazzare";
			
			indizio = "Ti verr\u00E0 fornito alla fine della sfida";
		break;
		
		case "tribunale":
			title = "TRIBUNALE";
		
			desc = "Da scrivere";
		
			text = "Da scrivere";
			
			indizio = "Indizio: ti verr\u00E0 fornito alla fine della sfida";
		break;
		
		case "mercato":
			title = "IL MERCATO";
		
			desc = "Per vincere non serve solo la forza ma anche l\u0027appoggio del popolo";
		
			text = "Spiare il nemico in questa guerra \u00E8 un\u0027arte fondamentale. Cos\u00EC come lo sono i travestimenti. Sappiamo che un informatore nemico si trova da Jasmine. "+
					"Uno di voi si avvolger\u00E0 nella carta stagnola e si far\u00E0 passare per un kebab arrotolato. Andate quindi da Yasmine e fatevi fotografare DENTRO al "+
					"locale con il travestimento addosso. Sulla stagnola scrivete \'SENSA PICANTE, SENSA SCIPOLA, SENSA CARNE E SENSA IMPASTO\'";
			
			indizio = "Indizio: ti verr\u00E0 fornito alla fine della sfida";
		break;
		
		case "palazzo":
			title = "IL PALAZZO";
		
			desc = "Solo chi \u00E8 pronto al sacrificio pu\u00F2 aspirare a diventare un leader";
		
			text = "Prova da scirvere";
			
			indizio = "Indizio: ti verr\u00E0 fornito alla fine della sfida";
		break;
		
		// ----- PER I LUOGHI ----- 
		case "xarsenale":
			title = "L\u0027ARSENALE";
		
			desc = "";
		
			text = "";
			
			indizio = "Indizio";
		break;
		
		case "xpiazza":
			title = "LA PIAZZA";
		
			desc = "";
		
			text = "";
			
			indizio = "Indizio";
		break;
		
		case "xtribunale":
			title = "IL TRIBUNALE";
		
			desc = "";
		
			text = "";
			
			indizio = "Indizio";
		break;
		
		case "xmercato":
			title = "IL MERCATO";
		
			desc = "";
		
			text = "";
			
			indizio = "Indizio";
		break;
		
		case "xpalazzo":
			title = "IL PALAZZO";
		
			desc = "";
		
			text = "";
			
			indizio = "Indizio";
		break;
		
		// ----- PER IL TUTORIAL ----- 
		
		case "start":
			title = "MY GESTAPO"
			
			desc = "Un solo regno";
			
			text = "Grazie a questa applicazione, la base pu\u00F2 comunicare direttamente con i soldati sul campo. In alto troverai sempre il titolo della missione, "+
					"(MY GESTAPO per adesso), subito sotto la storia collegata a questa missione (ora \'un solo regno\') e al posto di questo testo troverai sempre "+
					"le indicazioni per portare a termine la missione. Infine sotto hai la possibilit\u00E0 di mettere una parola d'odrine che ti verr\u00E0 fornita "+
					"tramite suggerimento o come ricompensa e ti servir\u00E0 per avanzare alla missione successiva."
					
			indizio = "Per iniziare digita XXX";
			
			break;
			
		case "xxx":
			alert("PASSWORD ERRATA");
			
			title = "MY GESTAPO";
			
			desc = "";
			
			text = "Fregato! Il messaggio che ti \u00E8 appena stato mostrato comparir\u00E0 quando digiti una password errata. Questa pagina non salva i tuoi progressi "+
					"ma non preoccuparti: basta inserire l'ultima password che hai ottenuto e tornerai al punto di prima. Facciamo un esempio: con la password suggerita "+
					"qua sotto tornerai alla pagina di prima. Fai attenzione: il tutorial \u00E8 finito, da adesso inizia la missione!";
			
			indizio = "Scrivi start e premi OK, poi dopo non scrivere XXX ma inserisci la password che vi \u00E8 stata data sul biglietto";
			
			
			break;
			
		default:
			alert("PASSWORD ERRATA");
			
			title = "ERRORE";
			
			desc = "";
			
			text = "Password errata. Riprova";
			
			indizio = "";
			
		 break;
	}
	if(title !== ""){
		titolo.textContent = "";
		write(title, titolo, 100);
	}
	if(desc !== ""){
		descrizione.textContent = "";
		descrizione.style.height = "min-content";
		setTimeout(restartCursor, 900, descrizione);
		setTimeout(write, 1000, desc, descrizione, 2000/desc.length);
	} else {
		descrizione.style.height = "0%";
	}
	
	
	if(text !== ""){
		testo.textContent = "";
		testo.style.height = "min-content";
		setTimeout(restartCursor, 3000, testo);
		setTimeout(write, 4000, text, testo, 4000/text.length);
	} else {
		testo.style.height = "0%";
	}
	
	if(indizio !== ""){
		inputIndizio.textContent = "";
		inputIndizio.style.height = "min-content";
		setTimeout(restartCursor, 8500, inputIndizio);
		setTimeout(write, 9000, indizio, inputIndizio, 2000/indizio.length);
	} else {
		inputIndizio.style.height = "0%";
	}
	
	setTimeout(function(){
		document.getElementById("casella").style.visibility = "visible";
	}, 12000);
	
	/*let endTime;
	if( text.length > desc.length) {
		endTime = 4000/text.length + 1000;
	}
	else endTime = 4000/desc.length + 1000;*/
	
	
	/*setTimeout(function(){
				alert("fatto");
			}, 6000);*/
	
}

function write(text, id, time){
	var l=text.length;
	var current = 0;

	var write_text = function() {
	  id.textContent+=text[current];
	  if(current < l-1) {
		current++;
		setTimeout(function(){write_text()},time);
	  } else {
		id.textContent = id.textContent;
		setTimeout(endCursor, 0, id);
	  }
	}
	setTimeout(function(){write_text()},time);
}

function endCursor(id){
	id.classList.add('endCursor'); 
}

function restartCursor(id){
	id.classList.remove('endCursor'); 
}
