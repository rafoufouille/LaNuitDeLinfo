function afficher(elemId) {
	var i = document.getElementById(elemId);
	if (window.getComputedStyle(i).display === "none") {
		i.style.display = "block";
	}
}

function vrai(elemId) {
	var t = document.getElementById(elemId);
	t.style.color = "#6AD161";
}

function faux(elemId) {
	var t = document.getElementById(elemId);
	t.style.color = "#FF7070";
}

function montrerCacher1() {
	var v1 = document.getElementById("texteAfficher1");
	var v2 = document.getElementById("texteAfficher2");
	if (window.getComputedStyle(v1).display === "none") {
		v1.style.display = "block";
	}
	if (window.getComputedStyle(v2).display === "flex") {
		v2.style.display = "none";
	}
}

function montrerCacher2() {
	var v1 = document.getElementById("texteAfficher1");
	var v2 = document.getElementById("texteAfficher2");
	if (window.getComputedStyle(v2).display === "none") {
		v2.style.display = "flex";
	}
	if (window.getComputedStyle(v1).display === "block") {
		v1.style.display = "none";
	}
}

function afficherHover(idElem) {
	var v = document.getElementById(idElem);
	v.style.display = "block";
}

function stopperHover(idElem) {
	var v = document.getElementById(idElem);
	v.style.display = "none";
}