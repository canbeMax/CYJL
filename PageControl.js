const scriptPath = document.currentScript.src;
const directoryPath = scriptPath.substring(0, scriptPath.lastIndexOf('/'));

function _1P(){
	window.location.href=directoryPath+"/1P/1P.html";
}
function _1P_start(){
	sessionStorage.setItem('timelimit',document.getElementById("timelimit").value);
	sessionStorage.setItem('timelimitenabled',document.getElementById("timelimitenabled").checked);
	window.location.href=directoryPath+"/1P/1P_start.html";
}
function _2P(){
	window.location.href=directoryPath+"/2P/2P.html";
}
function _2P_start(){
	window.location.href=directoryPath+"/2P/2P_start.html";
}
function home(){
	window.location.href=directoryPath+"/index.html";
}
function SearchIdioms(){
	window.location.href=directoryPath+"/1P/SearchIdioms.html";
}


