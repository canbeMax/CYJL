var score=0;
var trial=3;
var currentword = randomIdiom();
var run=true;
var timelimitenabled = sessionStorage.getItem('timelimitenabled');
var timelimit= sessionStorage.getItem('timelimit');
var time=Number(timelimit);

function giveup(){
	document.getElementById("submit").style.display = "none";
	document.getElementById("inputbox").style.display = "none";
	document.getElementById("hint").style.display = "none";
	document.getElementById("giveup").style.display = "none";
	document.getElementById("trial").style.display = "none";
	hint(currentword);
	document.getElementById("hintword").innerText = "可能的答案: "+document.getElementById("hintword").innerText;
	document.getElementById("idiom").innerText = "最后一个成语: "+currentword;
	run=false;
}
function ld(word){
	console.log(pinyin(word));
	var list = pinyin(word).split(" ");
	return list[list.length-1];
}
function fd(word){
	console.log(pinyin(word));
	var list = pinyin(word).split(" ");
	return list[0];
}
function submit(){
	userinput=document.querySelector('input[name="userinput"]');
	console.log(userinput.value[0]);
	console.log(currentword[currentword.length-1]);
	if(checkIdiom()){
		if(ld(currentword)===fd(userinput.value)||currentword[currentword.length-1]===userinput.value[0]){
			currentword=userinput.value;
			document.getElementById('idiom').innerText = currentword;
			trial=3;
			score+=1;
			time=timelimit;
		}
		else{
			alert("接不上:(");
		}
	}
	else{
		alert("成语不存在:(");
		if(trial>0){
			trial-=1;
		}
		if(trial === 0){
			giveup();
		}
	}
	userinput.value='';
	document.getElementById("hintword").innerText = "";
	document.getElementById('trial').innerText = "剩余机会:"+String(trial);
	document.getElementById('score').innerText = "积分:"+String(score);
}
window.onload = function(){
	document.getElementById('idiom').innerText = currentword;
	time.toFixed(1);
	time=Number(time);
	console.log(typeof(timelimitenabled));
	if(timelimitenabled==="true"){
		setInterval(function(){
			if(run){
				time-=0.1;
				time=Math.round(time * 10) / 10;
				if(time<=0){
					giveup();
					alert("时间用完了");
				}
				document.getElementById("time").innerText = time;
			}
		},100);
	}
}
