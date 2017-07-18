//Après chargement de la page, on initialise les variables

function init() {
 	pop = document.getElementById("popup");
 	form = document.getElementById("myForm");
 	infoBtn = document.getElementById("infoButton");
}

/*Avec l'attribut onsubmit on execute la fonction et on*
*retourne false pour ne pas envoyer le formulaire (frontend only)*
*On affiche le message pendant 4s, et on vide les champs du formulaire*/

function popup() {
	pop.style.display="block";
	setTimeout(function() {
		pop.style.display="none";
	},4000);
	form.reset();
	return false;
}

/*petite info bulle qui apparait au survol d'un champ du*
*formulaire et qui suit le mouvement de la souris*/

function showInfoBtn(evt) {
	infoBtn.style.display = "block";
	infoBtn.style.left = evt.clientX + "px";
	infoBtn.style.top = evt.clientY + "px";
}

function hideInfoBtn() {
	infoBtn.style.display = "none";
}

